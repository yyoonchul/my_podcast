# My Podcast

An AI-powered podcast platform that delivers personalized news and career insights.

## Overview

My Podcast is a modern web application that creates customized podcast content based on your interests and professional needs. Using advanced AI technology, it generates engaging audio content that keeps you informed about your chosen topics and helps you stay ahead in your career.

## Key Features

- **Personalized News Podcast**: AI-curated news summaries based on your selected topics
- **Career Growth Podcast**: Industry-specific insights and trends for your chosen profession
- **Hybrid Podcast**: Comprehensive content combining news and career insights

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Build Tool**: Vite

## Features in Detail

### News Podcast
- Select from various news topics
- Get AI-generated summaries of the latest news
- Stay updated with your interests

### Career Podcast
- Choose your professional field
- Receive industry-specific insights
- Track career development trends

### Hybrid Podcast
- Combine news and career content
- Get a balanced mix of information
- Comprehensive learning experience

## Environment Setup

1. Clone the repository
2. Navigate to the frontend directory
3. Copy the environment variables example file:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

## License

MIT License