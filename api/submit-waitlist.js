const { createClient } = require('@vercel/edge-config');

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
    const edgeConfig = createClient(process.env.EDGE_CONFIG);
    const { email, podcastType, selectedTopics, selectedJobRoles, wantProPlan } = req.body;
    
    // Get current waitlist
    let waitlist = await edgeConfig.get('waitlist') || [];
    
    // Add new item
    waitlist.push({
      id: `wait_${Date.now()}`, // Generate unique ID
      email,
      podcastType,
      selectedTopics: selectedTopics || [],
      selectedJobRoles: selectedJobRoles || [],
      wantProPlan: wantProPlan || false,
      createdAt: new Date().toISOString()
    });
    
    // Save updated waitlist to Edge Config
    await edgeConfig.set('waitlist', waitlist);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving to Edge Config:', error);
    return res.status(500).json({ error: 'Failed to save data' });
  }
};
