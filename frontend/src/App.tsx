import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import LandingPage from './pages/LandingPage';
import CategorySelection from './pages/CategorySelection';
import TopicSelection from './pages/TopicSelection';
import SignUp from './pages/SignUp';
import ThankYou from './pages/ThankYou';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/topics" element={<TopicSelection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 