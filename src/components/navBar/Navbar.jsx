import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

import vlogo from "../../assets/picsM/logo-webp.webp";
import "./Navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle desktop menu
  const handleMenuOpen = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
    setMobileMoreMenuOpen(false); 
  };
  

  const handleMobileMoreToggle = () => {
    setMobileMoreMenuOpen((prev) => !prev);
  };

  const handleScrollToSection = (sectionId) => {
    handleMenuClose();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 800,
        });
      }, 500);
    } else {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 800,
      });
    }
  };

  return (
    <AppBar position="fixed" className="navbar">
      
      <Box className="toolbar">
        <Box className="navmid" display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
        <Box className="logo-container">
  <Box className="logo-content">
    <img src={vlogo} alt="Kidzena" className="logo" />
    {/* <Box className="logo-text">
      <Typography className="logo-primary">Vidyarambh</Typography>
      <Typography className="logo-secondary">Balmandir</Typography>
    </Box> */}
  </Box>
</Box>


<Box>
<IconButton className="menu-icon" onClick={handleDrawerToggle}>
          <MenuIcon style={{fontSize:'35px'}}/>
        </IconButton>
</Box>
</Box>

        <Box className="nav-links">
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
          <Link to={"/about"}>
            <Button>About</Button>
          </Link>
          <Link to={"/classes"}>
            <Button>Classes</Button>
          </Link>
          <Link to={"/contact"}>
            <Button>Contact</Button>
          </Link>
          <Button onClick={handleMenuOpen}>
            More{" "}
            <KeyboardArrowDownIcon style={{ fontWeight: "bold", fontSize: "30px" }} />
          </Button>
          <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  className={`more-menu ${anchorEl ? "menu-open" : ""}`}
>
  <MenuItem onClick={() => handleScrollToSection("activities")} className="menu-item">Activities</MenuItem>
 
  <MenuItem onClick={() => handleScrollToSection("moments-section")} className="menu-item">Moments</MenuItem> 
  <MenuItem component={Link} to="/testimonials" onClick={handleMenuClose} className="menu-item">Testimonials</MenuItem>
  <MenuItem component={Link} to="/faqs" onClick={handleMenuClose} className="menu-item">FAQs</MenuItem>
  <MenuItem onClick={handleMenuClose} className="menu-item">Coming Soon</MenuItem>
</Menu>

        </Box>

        <Link to={"/admission"}>
          <Button variant="contained" className="get-started">
            Get Started
          </Button>
        </Link>
        </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box justifySelf={"flex-start"} className="menu-close-1">
          <IconButton onClick={handleDrawerToggle} className="close-menu-icon" sx={{ color: "red" }}>
            <CloseIcon style={{fontSize:'35px'}}/>
          </IconButton>
        </Box>

        <List className="mobile-menu">
          <ListItem button sx={{fontSize:'19px',width:'100%'}} onClick={handleDrawerToggle} >
            <Link className="navLink" to={"/"} >
              <ListItemText primary="Home"  />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link className="navLink" to={"/about"}>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link className="navLink" to={"/classes"}>
              <ListItemText primary="Classes" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link className="navLink" to={"/contact"}>
              <ListItemText primary="Contact " />
            </Link>
          </ListItem>
          

          {/* More Menu Toggle for Mobile */}
          <ListItem 
            button 
           className="navLink more-menu-item" 
           onClick={handleMobileMoreToggle}
                >
                <ListItemText primary="More" />
              <KeyboardArrowDownIcon />
              </ListItem>

             

              <Collapse in={mobileMoreMenuOpen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding className="slide-in-list">
    <ListItem button className="navLink" onClick={() => handleScrollToSection("activities")}>
      <ListItemText 
        primary="Activities" 
        primaryTypographyProps={{ style: { lineHeight: '0.5',fontWeight:550 } }} 
      />
    </ListItem>
    <ListItem button onClick={handleDrawerToggle}>
      <Link className="navLink" to={"/testimonials"}>
        <ListItemText 
          primary="Testimonials" 
          primaryTypographyProps={{ style: { lineHeight: '0.5',fontWeight:550 } }} 
        />
      </Link>
    </ListItem>
    <ListItem button className="navLink" onClick={() => handleScrollToSection("moments-section")}>
      <ListItemText 
        primary="Moments" 
        primaryTypographyProps={{ style: { lineHeight: '0.5',fontWeight:550 } }} 
      />
    </ListItem>
    <ListItem button onClick={handleDrawerToggle}>
      <Link className="navLink" to={"/faqs"}>
        <ListItemText 
          primary="FAQs" 
          primaryTypographyProps={{ style: { lineHeight: '0.5',fontWeight:550 } }} 
        />
      </Link>
    </ListItem>
    <ListItem button className="navLink" onClick={handleDrawerToggle}>
      <ListItemText 
        primary="Coming Soon" 
        primaryTypographyProps={{ style: { lineHeight: '0.5',fontWeight: 550} }} 
      />
    </ListItem>
    
  </List>
  
</Collapse>
<ListItem button onClick={handleDrawerToggle}>
            <Link className="navLink" to={"/admission"}>
              <ListItemText primary="Get Started " />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
