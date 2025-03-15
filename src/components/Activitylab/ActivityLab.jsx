import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Brush, Fingerprint, AutoAwesome, ColorLens, Gesture, Extension } from '@mui/icons-material';
import './Activitylab.css';
import activity from "../../assets/picsM/activitylab.webp"
import origami from "../../assets/picsM/origami.avif"
import hand from "../../assets/picsM/hand.avif"

const activities = [
  {
    title: "Clay Moulding",
    description: "Develop fine motor skills and creativity through hands-on clay sculpting activities.",
    icon: AutoAwesome,
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tissue Wrinkle Art",
    description: "Create beautiful textured artwork using tissue paper and creative techniques.",
    icon: ColorLens,
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Origami Paper Art",
    description: "Learn the Japanese art of paper folding to create amazing shapes and figures.",
    icon: Extension,
    image: origami
  },
  {
    title: "Painting",
    description: "Express creativity through various painting techniques and color exploration.",
    icon: Brush,
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hand & Finger Print",
    description: "Create unique artwork using hand and finger printing techniques.",
    icon: Fingerprint,
    image: hand
  },
  {
    title: "Coconut Shell Activity",
    description: "Explore eco-friendly crafts using coconut shells and natural materials.",
    icon: Gesture,
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

function ActivityLab() {
  return (
    <div className="activity-lab">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="header-lab-section">
          <Typography variant="h1" className="main-title-lab">
            Summer Camp
          </Typography>
          <Typography variant="h4" className="subtitle-lab">
            April & May - 15 Days Batches
          </Typography>
          <Typography variant="h5" className="age-group">
            Age Group: 3 to 10 years
          </Typography>
        </Box>

        {/* Featured Image */}
        <Box className="featured-image-container">
          <img
            src={activity}
            alt="Kids enjoying summer camp activities"
            className="featured-image"
          />
        </Box>

        {/* Activities Grid */}
        <Grid container spacing={4} className="activities-grid">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="activity-lab-card">
                  <div className="activity-lab-image-container">
                    <img src={activity.image} alt={activity.title} className="activity-image" />
                  </div>
                  <CardContent className="activity-lab-content">
                    <Box className="icon-container">
                      <IconComponent />
                    </Box>
                    <Typography variant="h5" className="activity-title">
                      {activity.title}
                    </Typography>
                    <Typography variant="body1" className="activity-description">
                      {activity.description}
                    </Typography>
                    <Button variant="contained" className="learn-more-btn">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Contact Information */}
        {/* <Box className="contact-section">
          <Typography variant="h6" className="contact-title">
            Contact Information
          </Typography>
          <Typography variant="body1" className="contact-details">
            #95, 5th Block, 60 Feet Road,<br />
            Opp. Udupi Party Hall, BDA Park,<br />
            Ullal, Bengaluru - 560056<br />
            Phone: +91 9972823113
          </Typography>
        </Box> */}
      </Container>
    </div>
  );
}

export default ActivityLab;