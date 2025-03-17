import React from "react";
import { Card, CardContent, Typography, Avatar,Box } from "@mui/material";
import "./Testimonials.css";
import CustomContainer from "../Container/CustomContainer";
import img1 from "../../assets/classes/parent1.avif";
import img2 from "../../assets/classes/parent2.jpg";
import img4 from "../../assets/classes/parent3.jpg";
import img5 from "../../assets/classes/parent4.jpg";
import img6 from "../../assets/classes/parent5.jpg";
import img7 from "../../assets/classes/parent6.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback: "This kindergarten has been a wonderful experience for my child. The teachers are caring, and the environment is nurturing.",
    image: img1,
  },
  {
    name: "Michael Smith",
    feedback: "A fantastic place for early learning! My child loves coming here every day and has grown so much.",
    image: img2,
  },
  {
    name: "Emily Davis",
    feedback: "I highly recommend this kindergarten. The activities are engaging, and the staff is very supportive.",
    image: img4,
  },
  {
    name: "John Doe",
    feedback: "Great atmosphere and learning experience. My child has improved a lot!",
    image:img5,
  },
  {
    name: "Emma Brown",
    feedback: "Lovely staff and fun activities! My child enjoys every moment spent here.",
    image:img6,
  },
  {
    name: "David Wilson",
    feedback: "A secure and friendly environment. I am grateful for the great care provided!",
    image: img7,
  }
];

const Testimonials = () => {
  return (
    <Box className="testimonials-container">
    {/* <CustomContainer
  title="Testimonials"
  description="Lorem ipsum dolor sit amet consectetur. Quis sed donec quis nunc aliquet cursus mauris ut.">
   <p style={{color:'#fff'}}>Enim fermentum maecenas rutrum dapibus sodales quis.</p>
  </CustomContainer> */}
    <div className="testimonials-container1">
      <Typography variant="h4"className="testimonials-title" gutterBottom sx={{color:'rgba(24, 175, 225, 0.9)', textShadow: '2px 2px 4px rgba(5, 4, 3, 0.4)',fontWeight:'bold'}}>
        What Parents Say
      </Typography>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card">
            <Avatar src={testimonial.image} className="testimonial-avatar" />
            <CardContent className="testimonials-content">
              <Typography variant="h6" gutterBottom className="testimonials-name">
                {testimonial.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" className="testimonials-feed">
                "{testimonial.feedback}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </Box>
  );
};

export default Testimonials;
