import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper } from '@mui/material';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: 'center',
            maxWidth: 600,
            width: '100%',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to DailyPod
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your personalized daily podcast companion
          </Typography>
          <Typography variant="body1" paragraph>
            Stay informed with curated content tailored to your interests. 
            Get daily updates on news, technology, business, and more through 
            convenient podcast episodes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/category')}
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default LandingPage; 