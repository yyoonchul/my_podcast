export interface PodcastType {
  id: string;
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
}

export interface NewsTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CareerRole {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UserPreferences {
  email: string;
  selectedTypes: string[];
  preferences: {
    news: string[];
    career: string;
  };
  createdAt: Date;
  selectedTopics: string[];
  selectedJob: string;
  podcastType: 'news' | 'career' | 'hybrid';
}

export interface LocationState {
  podcastType: 'news' | 'career' | 'hybrid';
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthError {
  code: string;
  message: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
} 