import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import "./HeroSection.css";
import kid1 from "../../assets/kid1.avif";
import pic1 from "../../assets/picsM/pic1.jpg"
import first from "../../assets/picsM/1st.webp"
import sec from "../../assets/picsM/sec.webp"
import pic2 from "../../assets/picsM/pic2.jpg"
import toy1 from "../../assets/toy1.png"; 
import toy2 from "../../assets/toy2.png";
import kidsbg from "../../assets/kidsGrp11-bg.png"
import kidsGrp8 from "../../assets/kidsGrp8.avif"
import { Link } from "react-router-dom";
import Gallery from "../gallery/Gallery";
import Activities from "../activities/Activities";
import WhyUs from "../whyUs/WhyUs";
import FourCsPage from "../FourCsPage/FourCsPage"
import ActivityLab from "../Activitylab/ActivityLab";

function HeroSection() {
  return (
    <Box className="hero">
    <Box className="hero-container">
      <Box className="hero-content hero-text">
        {/* Toys placed before text */}
        <Box className="toys-container">
          <img src={toy1} className="toy toy1" alt="toy1" />
          <img src={toy2} className="toy toy2" alt="toy2" />
        </Box>

        {/* Main Heading */}
        <Typography className="bouncy-text gradient-text" sx={{  fontWeight: "bold" }} gutterBottom>
          Better Future <br /><span> For Your Kids</span>
        </Typography>
        
        {/* Subtext */}
        <Typography  className="highlight-text" fontWeight={700} gutterBottom>
          Providing quality education with love and care.
        </Typography>
        
        <Link to={'/admission'} style={{textDecoration:'none',color:'black'}}> <Button variant="contained" className="custom-button">
          Enroll Now
        </Button></Link> 
      </Box>

      {/* Kid Image Section */}
      <Box className="image-container" marginTop={5}>
        <img src={first} className="background-img shadow-img" alt="kid" />
      </Box>
    </Box>
    
    <WhyUs/>


   <Box className="preschool-hero">
      {/* Image Section */}
      <Box
        component="img"
        src={sec}
        alt="Preschool"
        className="preschool-image"
      />

      {/* Text Section */}
      <Box className="preschool-text">
        <Typography variant="h4" className="preschool-heading">
          About Preschool
        </Typography>
        <Typography variant="body1" className="preschool-description">
        Holistic development encompassing academics, creative arts, sports, and social-emotional skills.
        Which includes,Early literacy and numeracy skills, along with personality development.
        </Typography>

        <Typography variant="h4" className="preschool-heading">
          About Teachers
        </Typography>
        <Typography variant="body2" className="preschool-description">
          Our teachers are highly trained professionals who are passionate about 
          early childhood education. <br /> They create a warm and encouraging atmosphere 
          where every child can thrive.
        </Typography>

        <Link to={"/about"} style={{ textDecoration: "none" }}>
          <Button variant="contained" className="preschool-button">
            Discover More
          </Button>
        </Link>
      </Box>
    </Box>
  {/* Gallery */}
  <ActivityLab/>

      <Gallery/>
      {/* Activities */}
    <Activities/>  
  
      </Box>
  );
}

export default HeroSection;
