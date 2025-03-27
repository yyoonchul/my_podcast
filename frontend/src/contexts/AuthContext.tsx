import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { AuthState, UserPreferences } from '../types';
import { onAuthStateChange, getUserPreferences } from '../utils/auth';

interface AuthContextType extends AuthState {
  userPreferences: UserPreferences | null;
  setUserPreferences: (preferences: UserPreferences) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthState['error']>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        try {
          const preferences = await getUserPreferences(user.uid);
          setUserPreferences(preferences);
        } catch (err) {
          console.error('Error fetching user preferences:', err);
        }
      } else {
        setUserPreferences(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, userPreferences, setUserPreferences }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 