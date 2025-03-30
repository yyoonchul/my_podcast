import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

interface WaitlistSubmission {
  email: string;
  podcastType: 'news' | 'career';
  selectedTopics?: string[];
  selectedJobRoles?: string[];
}

router.post('/submit', async (req, res) => {
  try {
    const { email, podcastType, selectedTopics, selectedJobRoles }: WaitlistSubmission = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if email already exists
    const existingSubmission = await prisma.waitlist.findUnique({
      where: { email }
    });

    if (existingSubmission) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new waitlist submission
    const submission = await prisma.waitlist.create({
      data: {
        email,
        podcastType,
        selectedTopics: selectedTopics || [],
        selectedJobRoles: selectedJobRoles || []
      }
    });

    res.status(201).json({
      message: 'Successfully joined waitlist',
      submission
    });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    res.status(500).json({ error: 'Failed to process waitlist submission' });
  }
});

export default router; 