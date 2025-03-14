import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Bedtime, Sanitizer, Person, ChildCare, People, House, PhoneAndroid, School, Psychology, AccessTime } from "@mui/icons-material";
import "./WhyUs.css";

const features = [
  { icon: <Bedtime fontSize="large" />, text: "Child-friendly Ambience" },
  { icon: <Sanitizer fontSize="large" />, text: "Safety and Hygiene" },
  { icon: <Person fontSize="large" />, text: "Trained and Experienced Staff" },
  { icon: <ChildCare fontSize="large" />, text: "Age-appropriate Activities" },
  { icon: <People fontSize="large" />, text: "Teacher Student Ratio" },
  { icon: <House fontSize="large" />, text: "Intercity Student Transfer" },
  { icon: <School fontSize="large" />, text: "Main School Tie-ups" },
  { icon: <Psychology fontSize="large" />, text: "Mindful Learning Approach" },
 
];

const WhyUs = () => {
  return (
    <Box className="why-us-container">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="why-main-grid">
            <Box className="feature-box">
              <Box className="feature-icon">{feature.icon}</Box>
              <Typography className="feature-text">{feature.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
