# Custom Podcast Subscription Website

A web application that allows users to subscribe to personalized daily podcasts based on their interests.

## Features

- Landing page with service introduction
- Podcast category selection
- News topic selection for daily news
- Google authentication
- Custom email selection for podcast delivery
- Firebase integration for data storage

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Firebase account and project
- Google Cloud Platform account

## Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a Firebase service account key:
   - Go to Firebase Console
   - Navigate to Project Settings > Service Accounts
   - Generate a new private key
   - Save the JSON file as `serviceAccountKey.json` in the backend directory

5. Create a `.env` file in the backend directory with your Firebase configuration:
   ```
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_PRIVATE_KEY_ID=your-private-key-id
   FIREBASE_PRIVATE_KEY=your-private-key
   FIREBASE_CLIENT_EMAIL=your-client-email
   FIREBASE_CLIENT_ID=your-client-id
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

## Running the Application

### Backend

1. Activate the virtual environment if not already activated:
   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be available at `http://localhost:8000`

### Frontend

1. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## Project Structure

```
my_podcast/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── serviceAccountKey.json
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── LandingPage.tsx
    │   │   ├── CategorySelection.tsx
    │   │   ├── TopicSelection.tsx
    │   │   ├── SignUp.tsx
    │   │   └── ThankYou.tsx
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── firebase.ts
    ├── package.json
    └── vite.config.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 