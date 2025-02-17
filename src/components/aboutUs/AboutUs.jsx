import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./AboutUs.css";
import kid2 from "../../assets/kid2.avif";
import kidsGrp from "../../assets/kidsGrp.avif";
import teacher1 from "../../assets/teacher1.avif";
import teacher2 from "../../assets/teacher2.avif";
import teacher3 from "../../assets/teacher3.avif";
import img5 from "../../assets/classes/parent5.jpg";
import CustomContainer from "../Container/CustomContainer";
import { Book, EmojiPeople, Home, Palette, School } from "@mui/icons-material";

function AboutUs() {
  return (
    <Box className="about-background">
  
      <Container className="about-container">
        <Box className="about-content">
          {/* Image Section */}
          <Box className="about-image-container">
            <img src={kidsGrp} alt="About Us" className="about-image" />
          </Box>

          {/* Text Section */}
          <Box className="about-text-container">
            <Typography  className="about-title">About Us</Typography>
            <Typography className="about-subtitle"  sx={{color:'#ee186d',fontWeight:'bold',mb:1}}>
            Give the Children Space to Grow a Creativity

            </Typography>
            <Typography variant="body1" className="about-description">
              Welcome to our kindergarten! We provide a nurturing and educational
              environment for young children, fostering creativity, curiosity, and
              a love for learning. Our dedicated staff ensures a safe and engaging
              experience for all kids.
            </Typography>
          </Box>
        </Box>

        {/* Key Features Section with Material Icons */}
        <Box className="about-points-container">
          <Typography variant="h4" className="about-points-title">Our Key Features</Typography>
          <ul className="about-points">
            <li>
              <School fontSize="large" className="about-icon" />
              Experienced and caring teachers
            </li>
            <li>
              <Palette fontSize="large" className="about-icon" />
              Fun and interactive learning activities
            </li>
            <li>
              <Book fontSize="large" className="about-icon" />
              Early childhood development programs
            </li>
            <li>
              <Home fontSize="large" className="about-icon" />
              Safe and secure environment for children
            </li>
            <li>
              <EmojiPeople fontSize="large" className="about-icon" />
              Encouraging social and emotional growth
            </li>
            <li>
              <EmojiPeople fontSize="large" className="about-icon" />
              Encouraging social and emotional growth
            </li>
          </ul>
        </Box>

        {/* Team Introduction Section */}
        <Box className="about-team-container">
          <Typography variant="h4" className="about-team-title">Meet Our Team</Typography>
          <Typography variant="body1" className="about-team-description">
            Our dedicated and passionate team of teachers and staff work together to provide the best early education experience for your child. We believe in continuous growth and collaboration to make learning fun and impactful.
          </Typography>
          <Box className="about-team-members">
            <Box className="team-member">
              <img src={teacher1} alt="Team Member" className="team-member-image" />
              <Typography variant="h6" className="team-member-name">Jane Doe</Typography>
              <Typography variant="body2" className="team-member-role">Lead Teacher</Typography>
            </Box>
            <Box className="team-member">
              <img src={teacher2} alt="Team Member" className="team-member-image" />
              <Typography variant="h6" className="team-member-name">John Smith</Typography>
              <Typography variant="body2" className="team-member-role">Assistant Teacher</Typography>
            </Box>
            <Box className="team-member">
              <img src={teacher3} alt="Team Member" className="team-member-image" />
              <Typography variant="h6" className="team-member-name">John</Typography>
              <Typography variant="body2" className="team-member-role">Assistant Teacher</Typography>
            </Box>
            <Box className="team-member">
              <img src={img5} alt="Team Member" className="team-member-image" />
              <Typography variant="h6" className="team-member-name">John</Typography>
              <Typography variant="body2" className="team-member-role">Assistant Teacher</Typography>
            </Box>
            {/* Add more team members here */}
          </Box>
        </Box>
      </Container>
    </Box>
    
  );
}

export default AboutUs;