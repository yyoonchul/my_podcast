import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
} from '@mui/material';

const topics = [
  { id: 'politics', label: 'Politics' },
  { id: 'international', label: 'International' },
  { id: 'tech', label: 'Technology' },
  { id: 'sports', label: 'Sports' },
  { id: 'ai', label: 'AI' },
  { id: 'business', label: 'Business & Economy' },
  { id: 'culture', label: 'Culture (Movies, Music, Entertainment)' },
];

const TopicSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicChange = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSubmit = () => {
    if (selectedTopics.length > 0) {
      navigate('/signup');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Select Your News Topics
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
            Choose the topics you want to receive daily updates about
          </Typography>

          <FormGroup sx={{ mt: 3 }}>
            {topics.map((topic) => (
              <FormControlLabel
                key={topic.id}
                control={
                  <Checkbox
                    checked={selectedTopics.includes(topic.id)}
                    onChange={() => handleTopicChange(topic.id)}
                    color="primary"
                  />
                }
                label={topic.label}
              />
            ))}
          </FormGroup>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={selectedTopics.length === 0}
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default TopicSelection; 