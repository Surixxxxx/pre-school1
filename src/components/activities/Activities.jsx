import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { School, DirectionsBus, SportsSoccer, MusicNote, Hiking, RecordVoiceOver } from "@mui/icons-material";
import "./Activities.css"; // Import CSS for animations

const activities = [
  { title: "Great Teacher", icon: <School fontSize="large" />, color: "#ff5733" },
  { title: "Bus Service", icon: <DirectionsBus fontSize="large" />, color: "#ffb900" },
  { title: "Sports Training", icon: <SportsSoccer fontSize="large" />, color: "#28a745" },
  { title: "Music Training", icon: <MusicNote fontSize="large" />, color: "#ff007f" },
  { title: "Outing Service", icon: <Hiking fontSize="large" />, color: "#007bff" },
  { title: "Language Course", icon: <RecordVoiceOver fontSize="large" />, color: "#800080" }
];

const Activities = () => {
  return (
    <Box id="activities">
         <Typography justifySelf={'center'} fontWeight={'bold'} fontSize={50} color="#fff">
            Services
        </Typography>

    <Box className="activities-wrapper" >
      {activities.map((activity, index) => (
        <Card key={index} className="activity-card" sx={{ borderTop: `5px solid ${activity.color}` }}>
          <CardContent>
            <Box className="activities-icon" sx={{ color: activity.color }}>
              {activity.icon}
            </Box>
            <Typography variant="h6" className="activities-title">
              {activity.title}
            </Typography>
            <Typography variant="body2" className="activities-description">
              Praesent arcu gravida vehicula est node maecenas loareet morbi then dosis luctus then dosis luctus morbi.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  );
};

export default Activities;
