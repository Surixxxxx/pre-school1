import React from "react";
import { Box, Container, Grid, Typography, IconButton, TextField, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Public  } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography component="h2" className="main-title">
              Vidyarambh Balmandir
            </Typography>
            <Typography variant="body1" className="footer-text">
              Empowering young minds with Kreedo Learning Materials.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="h3" className="footer-title">
              Quick Links
            </Typography>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/class">Classes</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/admission">Admissions</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" className="footer-title">
              Contact Us
            </Typography>
            <Box>
              <Typography className="contact-item">
                <LocationOn /> #95, 5th Block, 60 Feet Road, BDA Park, Opp. Udupi Party Hall, Ullal, Bangalore - 56
              </Typography>
              <Typography className="contact-item">
                <Phone /> 9972823113
              </Typography>
              <Typography className="contact-item">
              <Email  />  vidyarambhbalmandir@gmail.com
              </Typography>
              <Typography className="contact-item">
                <Public  /> www.vidyarambhacademy.com
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h3" className="extra-title">
              Stay Updated
            </Typography>
            <Box className="newsletter-section">
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
              </Box>
              <Box className="newsletter-btn-container">
                <Button
                  variant="contained"
                  className="newsletter-btn"
                  fullWidth
                  sx={{ mt: { xs: 1, md: 2 } }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>


          {/* Social Media */}
          <Box className="social-section">
          <Typography variant="h6" component="h3" align="center" className="footer-title footer-follow">
            Follow Us
          </Typography>
          <Box className="social-icons icons">
            <IconButton component="a" href="https://www.facebook.com/share/14wqMNK3LY/" target="_blank" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com/vidyarambh_balmandir2025?igsh=MXR0M2Q3bmQ1MDEwcA==" target="_blank" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/@VidyarambhBalmandir" target="_blank" aria-label="YouTube">
              <YouTube />
            </IconButton>
            <IconButton aria-label="#">
              <Twitter />
            </IconButton>
          </Box>
        </Box>  
          
          

        <Typography variant="body2" align="center" className="footer-copy">
          © {new Date().getFullYear()} Vidyarambh Balmandir. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
