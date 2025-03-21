from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials, firestore
from typing import List, Optional
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize Firebase Admin with environment variables
cred = credentials.Certificate({
    "type": "service_account",
    "project_id": os.getenv("FIREBASE_PROJECT_ID"),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY").replace("\\n", "\n"),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.getenv("FIREBASE_CLIENT_ID"),
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": f"https://www.googleapis.com/robot/v1/metadata/x509/{os.getenv('FIREBASE_CLIENT_EMAIL')}"
})

firebase_admin.initialize_app(cred)
db = firestore.client()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SubscriptionRequest(BaseModel):
    email: str
    podcast_email: str
    topics: List[str]
    category: str

@app.get("/")
async def read_root():
    return {"message": "Welcome to Podcast Subscription API"}

@app.post("/api/subscribe")
async def create_subscription(subscription: SubscriptionRequest):
    try:
        # Store subscription data in Firebase
        subscription_data = {
            "email": subscription.email,
            "podcast_email": subscription.podcast_email,
            "topics": subscription.topics,
            "category": subscription.category,
            "created_at": firestore.SERVER_TIMESTAMP
        }
        
        db.collection("subscriptions").add(subscription_data)
        return {"message": "Subscription created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 