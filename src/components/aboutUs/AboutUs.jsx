import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./AboutUs.css";
import kid2 from "../../assets/kid2.avif";
import pic8 from "../../assets/picsM/pic8.jpg"
import kidsGrp from "../../assets/kidsGrp.avif";
import teacher1 from "../../assets/teacher1.avif";
import teacher2 from "../../assets/teacher2.avif";
import teacher3 from "../../assets/teacher3.avif";
import img5 from "../../assets/classes/parent5.jpg";
import CustomContainer from "../Container/CustomContainer";
import { Book, EmojiEmotions, EmojiPeople, Home, Palette, School, SocialDistanceTwoTone } from "@mui/icons-material";
import FourCsPage from "../FourCsPage/FourCsPage";
import thir from "../../assets/picsM/thir.webp"

function AboutUs() {
  return (
    <Box className="about-background">
  
      <Container className="about-container">
        <Box className="about-content">
          {/* Image Section */}
          <Box className="about-image-container">
            <img src={thir} alt="About Us" className="about-image" />
          </Box>

          {/* Text Section */}
          <Box className="about-text-container">
            <Typography  className="about-title">About Us</Typography>
            <Typography className="about-subtitle"  sx={{color:'#ee186d',fontWeight:'bold',mb:1}}>
            Give the Children Space to Grow a Creativity

            </Typography>
            <Typography variant="body1" className="about-description">
            Vidyarambh Balmandir is part of Lighthouse Learning Group, India's leading Early Childhood & K-12 Education group backed by KKR Capital.
             Lighthouse Learning is committed to deliver holistic development of its 175,000+ students across the network. 
             The group works towards delivering a robust foundation for future generations with innovation in pedagogy,
              use of appropriate technology and focus on child safety.
            </Typography>
          </Box>
        </Box>

        {/* Key Features Section with Material Icons */}
        <Box className="about-points-container">
          <Typography variant="h4" className="about-points-title">Our Key Features</Typography>
          <ul className="about-points">
            <li>
              <School fontSize="large" className="about-icon" />
              Play-based learning with Montessori.
            </li>
            <li>
              <Palette fontSize="large" className="about-icon" />
              Modern facilities with well-equipped classrooms and play areas.
            </li>
            <li>
              <Book fontSize="large" className="about-icon" />
              Smaller class sizes providing personalized attention.
            </li>
            <li>
              <Home fontSize="large" className="about-icon" />
              Best  activities where the child would enjoy.
            </li>
            <li>
              <EmojiPeople fontSize="large" className="about-icon" />
              We encourage parent participation in classroom activities.
            </li>
            <li>
              <EmojiEmotions fontSize="large" className="about-icon" />
              Encouraging social and emotional growth
            </li>
          </ul>
        </Box>
          {/* FourCspage */}
            <FourCsPage/>

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