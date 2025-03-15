import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Palette, MusicNote, Science, Favorite, Star, MenuBook } from '@mui/icons-material';
import './ActivityLab.css';
import activity from "../../assets/picsM/activitylab.webp"

const activities = [
    {
      title: "Art & Creativity",
      description: "Explore colors, shapes, and textures through painting, drawing, and crafts.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Music & Movement",
      description: "Dance, sing, and play instruments to develop rhythm and coordination.",
      icon: MusicNote,
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Discovery Corner",
      description: "Hands-on science experiments and nature exploration activities.",
      icon: Science,
      image: "https://images.unsplash.com/photo-1555696958-c5049b866f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Skills",
      description: "Group activities that foster friendship, sharing, and emotional development.",
      icon: Favorite,
      image: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Imaginative Play",
      description: "Role-playing and pretend play to boost creativity and social skills.",
      icon: Star,
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Story Time",
      description: "Interactive reading sessions to develop language and listening skills.",
      icon: MenuBook,
      image: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  function ActivityLab() {
    return (
      <div className="activity-lab">
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box className="header-lab-section">
            <Typography variant="h1" className="main-title-lab">
              Activity Lab
            </Typography>
            <Typography variant="h4" className="subtitle-lab">
              Where Learning Meets Play
            </Typography>
          </Box>
  
          {/* Featured Image */}
          <Box className="featured-image-container">
            <img
              src={activity}
              alt="Kids playing and learning"
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
                        <IconComponent size={32} />
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
        </Container>
      </div>
    );
  }
  
  export default ActivityLab;