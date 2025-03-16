import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import "./AdmissionInquiry.css";
import CustomContainer from "../Container/CustomContainer";
import { Star } from "lucide-react";

const programs = [
  { name: "Play Group", color: "#1e88e5" }, // Blue
  { name: "Pre-KG", color: "#e91e63" }, // Pink
  { name: "LKG", color: "#8e24aa" }, // Purple
  { name: "UKG", color: "#43a047" }, // Green
  { name: "Day Care", color: "#ff9800" } // Orange
];

const AdmissionInquiry = () => {
  return (
    <Box className="admission">
      <Box className="admission-inquiry">
        <Box className="admission-content">
          <Typography variant="h3" className="admission-title">
            Admissions Open for 2025-26
          </Typography>
          <Typography variant="h5" className="admission-subtitle">
            Empowering Young Minds with Kreedo Learning Materials
          </Typography>
          <Typography variant="h6" className="admission-offer">
            Inaugural Offer: Free Books, Bag & Uniforms
          </Typography>
          <Typography variant="h6" className="admission-programs">
            Programs Offered:
          </Typography>
          <Box className="programs-list">
            {programs.map((program, index) => (
              <Box
                key={index}
                className="program-item"
                sx={{ backgroundColor: program.color }}
              >
                <Star className="program-icon" />
                <Typography variant="body1" className="program-text">
                  {program.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="inquiry-form">
          <Typography variant="h5" className="form-title">
            Enquire Now
          </Typography>
          <TextField label="First Name" variant="outlined" className="form-input" />
          <TextField label="Last Name" variant="outlined" className="form-input" />
          <TextField label="Email" variant="outlined" className="form-input" />
          <TextField label="Mobile" variant="outlined" className="form-input" />
          <TextField label="City" variant="outlined" className="form-input" />
          <Box display={"flex"} gap={"20px"}>
            <Button variant="contained" className="submit-button">
              Submit
            </Button>
            <Button variant="contained" className="submit-button">
              Clear
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdmissionInquiry;
