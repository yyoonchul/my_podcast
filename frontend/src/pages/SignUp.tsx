import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Alert,
} from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { auth, db } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [podcastEmail, setPodcastEmail] = useState('');
  const [emailOption, setEmailOption] = useState('same');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setEmail(user.email || '');
      setPodcastEmail(user.email || '');
    } catch (error) {
      setError('Failed to sign in with Google');
    }
  };

  const handleSubmit = async () => {
    try {
      if (!email || !podcastEmail) {
        setError('Please fill in all fields');
        return;
      }

      // Save subscription data to Firebase
      await setDoc(doc(db, 'subscriptions', email), {
        email,
        podcastEmail,
        category: 'daily-news',
        topics: [], // You'll need to pass the selected topics from the previous page
        createdAt: new Date(),
      });

      navigate('/thank-you');
    } catch (error) {
      setError('Failed to save subscription');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Sign Up
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
            Create your account to start receiving daily podcasts
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignIn}
              size="large"
            >
              Sign in with Google
            </Button>
          </Box>

          <Box sx={{ mt: 4 }}>
            <FormControl component="fieldset">
              <RadioGroup
                value={emailOption}
                onChange={(e) => setEmailOption(e.target.value)}
                sx={{ mb: 2 }}
              >
                <FormControlLabel
                  value="same"
                  control={<Radio />}
                  label="Use the same email for podcast delivery"
                />
                <FormControlLabel
                  value="different"
                  control={<Radio />}
                  label="Use a different email for podcast delivery"
                />
              </RadioGroup>

              <TextField
                fullWidth
                label="Account Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />

              {emailOption === 'different' && (
                <TextField
                  fullWidth
                  label="Podcast Delivery Email"
                  value={podcastEmail}
                  onChange={(e) => setPodcastEmail(e.target.value)}
                  margin="normal"
                  required
                />
              )}
            </FormControl>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!email || (emailOption === 'different' && !podcastEmail)}
            >
              Complete Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUp; 