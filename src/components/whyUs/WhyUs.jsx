import React from 'react';
import {
  CheckCircle,
  Groups,
  Extension,
  Psychology,
  School,
  Science,
  Sports,
} from '@mui/icons-material';
import './WhyUs.css'; // Import the CSS file

const benefits = [
  { icon: <CheckCircle />, text: "A Child-Centric Curriculum" },
  { icon: <Groups />, text: "Activity-Based Learning" },
  { icon: <Extension />, text: "Scientifically Designed Learning Materials" },
  { icon: <School />, text: "Well-Trained Teachers" },
  { icon: <Psychology />, text: "Solid Foundation in English, Maths, Science & Culture" },
  { icon: <Science />, text: "Focus on Science & Culture" }, // New benefit
  { icon: <Sports />, text: "Play-way Teaching Methodology" } // New benefit
];

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <h2>Why Choose Vidyarambh?</h2>

      {/* Benefits Section */}
      <h3>Our Benefits</h3>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-box">
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-text">{benefit.text}</div>
          </div>
        ))}
      </div>

      {/* Programs Section */}
      <h3>Our Programs</h3>
      <div className="programs">
        {['Playgroup', 'Nursery', 'LKG', 'UKG', 'Day Care'].map((program, index) => (
          <span key={index}>{program}</span>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;