import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import PodcastSelectionPage from './pages/PodcastSelectionPage';
import CustomizationPage from './pages/CustomizationPage';
import SignUpPage from './pages/SignUpPage';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/podcast-selection" element={<PodcastSelectionPage />} />
          <Route path="/customization" element={<CustomizationPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App; 