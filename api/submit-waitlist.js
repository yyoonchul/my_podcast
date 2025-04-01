// Try to use Edge Config if available, with fallback to in-memory storage
let { createClient } = require('@vercel/edge-config');
const tempStorage = []; // Fallback storage

// Simple API to handle waitlist submissions
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, podcastType, selectedTopics, selectedJobRoles, wantProPlan, createdAt } = req.body;
    
    // 필수 필드 검증
    if (!email || !podcastType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 새 항목 생성
    const newSubmission = {
      id: `wait_${Date.now()}`,
      email,
      podcastType,
      selectedTopics: selectedTopics || [],
      selectedJobRoles: selectedJobRoles || [],
      wantProPlan: wantProPlan || false,
      createdAt: createdAt || new Date().toISOString()
    };

    // 로그 남기기 (디버깅 용도)
    console.log('New waitlist submission:', JSON.stringify(newSubmission));
    
    try {
      // Edge Config 사용 시도
      if (process.env.EDGE_CONFIG && createClient) {
        const edgeConfig = createClient(process.env.EDGE_CONFIG);
        let waitlist = [];
        
        try {
          // 기존 데이터 가져오기 시도
          waitlist = await edgeConfig.get('waitlist') || [];
        } catch (getError) {
          console.error('Error fetching from Edge Config:', getError);
          // 오류 발생 시 비어있는 배열로 시작
        }
        
        // 새 항목 추가
        waitlist.push(newSubmission);
        
        // Edge Config에 저장
        await edgeConfig.set('waitlist', waitlist);
        console.log('Successfully saved to Edge Config');
      } else {
        // Edge Config를 사용할 수 없는 경우 임시 저장소 사용
        tempStorage.push(newSubmission);
        console.log('Saved to temporary storage (Edge Config not available)');
      }
    } catch (storageError) {
      // 저장 실패 시도 임시 저장소에 저장
      console.error('Error with Edge Config, using temp storage:', storageError);
      tempStorage.push(newSubmission);
    }

    // 성공적인 응답 반환
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully added to waitlist' 
    });
  } catch (error) {
    console.error('Global error in waitlist API:', error);
    return res.status(500).json({ 
      error: 'Failed to process submission', 
      message: 'Please try again later' 
    });
  }
};
