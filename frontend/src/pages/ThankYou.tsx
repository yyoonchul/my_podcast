import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  CheckCircle as CheckCircleIcon,
} from '@mui/material';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <CheckCircleIcon
            sx={{ fontSize: 80, color: 'success.main', mb: 2 }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Thank You for Subscribing!
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your subscription has been successfully created
          </Typography>
          <Typography variant="body1" paragraph>
            You will start receiving your daily podcast episodes soon.
            We're excited to have you on board!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Return to Home
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ThankYou; 