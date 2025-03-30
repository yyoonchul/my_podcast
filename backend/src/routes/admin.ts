import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Basic authentication middleware
const authenticateAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Get all waitlist submissions
router.get('/waitlist', authenticateAdmin, async (req, res) => {
  try {
    const submissions = await prisma.waitlist.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ error: 'Failed to fetch waitlist data' });
  }
});

// Get waitlist statistics
router.get('/stats', authenticateAdmin, async (req, res) => {
  try {
    const totalSubmissions = await prisma.waitlist.count();
    const podcastTypeStats = await prisma.waitlist.groupBy({
      by: ['podcastType'],
      _count: true
    });
    
    res.json({
      totalSubmissions,
      podcastTypeStats
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

export default router; 