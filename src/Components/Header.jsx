import React,{useState} from 'react' ;
import {AppBar,Box,Drawer,IconButton,List,ListItem,ListItemText,Tab,Tabs,Toolbar,useMediaQuery} from '@mui/material'
import AlmaBetter from './Images/AlmaBetter.png'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

    const navLinkStyles = ({isActive})=>{
      return{
        fontWeight: isActive ? 'bold' : 'black',
        textDecoration: 'none',
        color: isActive ? "blue" : "black",
        borderBottom: isActive ? "2px solid blue" : "none",
        marginRight: "20px",
        padding: "6px 0",
      }
    }

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [open,setOpen] = useState(false);

    const handleDrawerToggel=()=>{
      setOpen(!open)
    }

  return (
    <Box sx={{flexGrow: 1}} >
        <AppBar sx={{
          background:'white',
          position: 'static',
          '@media (max-width: 600px)': {
            padding: '0px',
          },
          }}
          >
             <Toolbar sx={{ justifyContent: 'space-between','@media (max-width: 600px)': {
              padding: '0px'}, }}>
              <NavLink to="/">
                <img src={AlmaBetter} alt="Alma" height="40px" />
              </NavLink>
              {isMobile ? (
            <>
              <IconButton onClick={handleDrawerToggel}>
                <MenuIcon/>
              </IconButton>
              <Drawer
                anchor='right'
                open={open}
                onClose={handleDrawerToggel}
              >
                <List>
                  <ListItem button component={NavLink} to="/" onClick={handleDrawerToggel}>
                    <ListItemText primary="Resume Templates" />
                  </ListItem>
                  <ListItem button component={NavLink} to="/myresume" onClick={handleDrawerToggel}>
                    <ListItemText primary="My Resumes" />
                  </ListItem>
                  <ListItem button component={NavLink} to="/about" onClick={handleDrawerToggel}>
                    <ListItemText primary="About Us" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Tabs value={false} textColor="primary">
              <NavLink to="/" style={navLinkStyles}>
                <Tab label="Resume Templates" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
              </NavLink>
              <NavLink to="/myresume" style={navLinkStyles}>
                <Tab label="My Resumes" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
              </NavLink>
              <NavLink to="/about" style={navLinkStyles}>
                <Tab label="About Us" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
              </NavLink>
            </Tabs>
          )}
      </Toolbar>         
        </AppBar>
    </Box>
  )
}

export default Header