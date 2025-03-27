import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserPreferences } from '../types';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (preferences?: Partial<UserPreferences>) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user preferences exist
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists() && preferences) {
      // Create preferences for new users
      await setDoc(doc(db, 'users', user.uid), {
        ...preferences,
        createdAt: new Date()
      });
    }
    
    return user;
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmail = async (email: string, password: string, preferences?: Partial<UserPreferences>) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    
    // Create preferences for new users
    if (preferences) {
      await setDoc(doc(db, 'users', user.uid), {
        ...preferences,
        createdAt: new Date()
      });
    }
    
    return user;
  } catch (error) {
    throw error;
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const updateUserPreferences = async (uid: string, preferences: Partial<UserPreferences>) => {
  try {
    await setDoc(doc(db, 'users', uid), preferences, { merge: true });
  } catch (error) {
    throw error;
  }
};

export const getUserPreferences = async (uid: string): Promise<UserPreferences | null> => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as UserPreferences : null;
  } catch (error) {
    throw error;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
}; 