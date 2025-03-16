import React from "react";
import { TextField, Button, Grid, Typography, Box, IconButton } from "@mui/material";
import { LocationOn, Phone, Email, Facebook, Instagram, YouTube } from "@mui/icons-material";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Box className="background">
      <Box className="contact-container">
        <Box className="contact-container1">
          {/* Left Section - Contact Form */}
          <Box className="left-section">
            <Typography variant="h4" className="title">
              Let's Talk
            </Typography>
            <Typography variant="body1" className="description">
              Get in touch with us for any inquiries or project discussions. We're here to help!
            </Typography>
            <form className="contact-form">
              <Grid spacing={2} className="input-fields">
                <Box className="inputs">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Your Name"
                      variant="outlined"
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Email Address"
                      variant="outlined"
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Phone Number"
                      variant="outlined"
                      className="input-field"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Project Details"
                      variant="outlined"
                      className="input-field"
                    />
                  </Grid>
                </Box>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Write your message"
                    variant="outlined"
                    multiline
                    rows={4}
                    className="input-field"
                  />
                </Grid>
              </Grid>
              <Box className="cont-btn">
                <Button variant="contained" className="animated-button">
                  Submit
                </Button>
                <Button variant="contained" className="animated-button">
                  Clear
                </Button>
              </Box>
            </form>
          </Box>

          {/* Right Section - Contact Info */}
          <Box className="right-section">
            <Typography variant="h4" className="title">
              Contact with us
            </Typography>
            <Typography variant="body1" className="description">
              Reach out to us at our office or through the contact details below.
            </Typography>
            <div className="contact-details">
              <p>
                <LocationOn />
                <span className="address">
                  #95, 5th Block, 60 Feet Road, BDA Park, Opp. Udupi Party Hall, Ullal, Bangalore - 56
                </span>
              </p>
              <p>
                <Phone />
                <span className="address">9972823113</span>
              </p>
              <p>
                <Email />
                <span className="address">yourname@example.com</span>
              </p>
            </div>

            {/* Google Map Embed */}
            <Typography variant="h5" className="title map-title">
              Our Location
            </Typography>
            <div className="map-container">
              <iframe
                src="https://maps.app.goo.gl/Yv2N36NkzgbfcpZv9"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media Links */}
            <Typography variant="h5" className="follow-title title" marginBottom={2} marginTop={2}>
              Follow Us
            </Typography>
            <div className="contact-icons">
              <IconButton component="a" href="https://www.facebook.com/share/14wqMNK3LY/" target="_blank" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/vidyarambh_balmandir2025?igsh=MXR0M2Q3bmQ1MDEwcA==" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://www.youtube.com/@VidyarambhBalmandir" target="_blank" aria-label="YouTube">
                <YouTube />
              </IconButton>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
