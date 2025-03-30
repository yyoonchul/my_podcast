import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

interface WaitlistSubmission {
  email: string;
  podcastType: 'news' | 'career';
  selectedTopics?: string[];
  selectedJobRoles?: string[];
  createdAt: Date;
}

export const submitWaitlist = functions.https.onRequest(async (req, res) => {
  // CORS 설정
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data: WaitlistSubmission = req.body;

    // 이메일 유효성 검사
    if (!data.email || !data.email.includes('@')) {
      res.status(400).json({ error: 'Invalid email address' });
      return;
    }

    // Firestore에 데이터 저장
    const waitlistRef = admin.firestore().collection('waitlist');
    
    // 이메일 중복 체크
    const existingSubmission = await waitlistRef
      .where('email', '==', data.email)
      .get();

    if (!existingSubmission.empty) {
      res.status(400).json({ error: 'Email already registered' });
      return;
    }

    // 새 제출 저장
    await waitlistRef.add({
      ...data,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'Successfully joined waitlist' });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    res.status(500).json({ error: 'Failed to process waitlist submission' });
  }
});

export const getWaitlistStats = functions.https.onRequest(async (req, res) => {
  // CORS 설정
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const waitlistRef = admin.firestore().collection('waitlist');
    
    // 전체 제출 수 가져오기
    const totalSnapshot = await waitlistRef.count().get();
    const totalSubmissions = totalSnapshot.data().count;

    // 팟캐스트 타입별 통계
    const typeSnapshot = await waitlistRef.get();
    const typeStats = typeSnapshot.docs.reduce((acc, doc) => {
      const data = doc.data();
      acc[data.podcastType] = (acc[data.podcastType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    res.json({
      totalSubmissions,
      podcastTypeStats: Object.entries(typeStats).map(([type, count]) => ({
        podcastType: type,
        _count: count
      }))
    });
  } catch (error) {
    console.error('Error fetching waitlist stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
}); 