import { collection, addDoc } from 'firebase/firestore';
import { db } from './config';

interface WaitlistData {
  email: string;
  podcastType: 'news' | 'career';
  selectedTopics?: string[];
  selectedJobRoles?: string[];
  wantProPlan: boolean;
  timestamp: Date;
}

export const submitWaitlistData = async (data: Omit<WaitlistData, 'timestamp'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'waitlist'), {
      ...data,
      timestamp: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};