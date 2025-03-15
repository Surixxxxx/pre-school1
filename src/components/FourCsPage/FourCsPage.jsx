import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import PsychologyIcon from "@mui/icons-material/Psychology";
import './FourCsPage.css';
import Force4 from "../../assets/picsM/4cs.webp"

const content = [
  {
    title: "Critical Thinking",
    description: "The ability to analyze information, evaluate different perspectives, and solve problems effectively. Helps in making reasoned decisions based on evidence.",
    icon: PsychologyIcon
  },
  {
    title: "Collaboration",
    description: "Working together with others to achieve a common goal. Encourages teamwork, communication, and cooperation in diverse environments.",
    icon: GroupsIcon
  },
  {
    title: "Communication",
    description: "The skill of expressing ideas clearly and effectively through various mediums. Includes verbal, written, and digital communication for sharing thoughts and opinions.",
    icon: ChatIcon
  },
  {
    title: "Creativity & Innovation",
    description: "The ability to think outside the box and develop new ideas or solutions. Encourages originality and adaptability in different scenarios.",
    icon: LightbulbIcon
  }
];

function FourCsPage() {
  return (
    <div className="fourCs-container">
    <Container maxWidth="lg">
    <Typography variant="h2" component="h1" gutterBottom
              sx={{
                fontWeight: 700,
                color: '#2c3e50',
                justifySelf:'center',
                marginBottom: 3,
                fontSize: { xs: '1.8rem', md: '3rem' }
              }}>
              The 4C's of Learning
            </Typography>
      <Grid container spacing={12} className='force-grid'>
        {/* Left side - Image */}
        <Grid item xs={12} md={5} >
          <Box className="fourCs-header">
          
            <img
              src={Force4}
              alt="4C's Learning"
              className="fourCs-image"
            />
          </Box>
        </Grid>

        {/* Right side - Cards */}
        <Grid item xs={12} md={7} className='right-side'>
          <Grid container spacing={3}>
            {content.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Card className="card" elevation={3}>
                    <CardContent className="card-content">
                      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                        <IconComponent size={48} strokeWidth={1.5} 
                          style={{ color: '#6b8cce' }} />
                      </Box>
                      <Typography variant="h5" component="h2" 
                        className="card-title"
                        sx={{
                          fontWeight: 600,
                          color: '#2c3e50',
                          textAlign: 'center'
                        }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" 
                        sx={{ 
                          textAlign: 'center',
                          lineHeight: 1.6
                        }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
}

export default FourCsPage;