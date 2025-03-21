import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';

const categories = [
  {
    id: 'daily-news',
    title: 'Daily News',
    description: 'Stay updated with the latest news from around the world',
  },
  {
    id: 'portfolio-news',
    title: 'Portfolio News',
    description: 'Get news updates about your selected companies',
  },
  {
    id: 'paper-review',
    title: 'Paper Review',
    description: 'Daily summaries of academic papers in your field of interest',
  },
  {
    id: 'job-training',
    title: 'Job Training',
    description: 'Educational content tailored to your professional development',
  },
  {
    id: 'language-learning',
    title: 'Language Learning',
    description: 'Learn your chosen language through daily podcast episodes',
  },
];

const CategorySelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'daily-news') {
      navigate('/topics');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Choose Your Podcast Category
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
          Select the type of content you'd like to receive daily
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} key={category.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  border: selectedCategory === category.id ? '2px solid #1976d2' : 'none',
                }}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
        >
          <Alert onClose={() => setShowAlert(false)} severity="info">
            This feature is coming soon! Please try Daily News for now.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default CategorySelection; 