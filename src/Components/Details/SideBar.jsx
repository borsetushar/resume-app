import React from 'react'
import {Box,ButtonGroup,Typography} from '@mui/material'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';

function SideBar() {
    
    const navLinkStyles = ({isActive})=>{
        return{
          textDecoration: 'none',
          display:'flex',
          flexDirection:'column',
          color: isActive ? "#0069d9" : "#36454F",
          borderLeft: isActive ? "2px solid blue" : "none",
          borderBottom : "1px solid grey",
          paddingLeft: "10px", 
          width: "180px",
        }
      }
  return (
    <div>
        <Box
        sx={{
            display:'flex',
            '&>*':{
                m: 1,
            },
        }}
        >
            <ButtonGroup
            orientation='vertical'
            aria-label='vertical outlined button group'
            sx={{
                marginLeft: '90px',
                marginTop: '150px',
            }} 
            >
                <nav> 
                <NavLink style={navLinkStyles} to={'/details'} >
                   
                    <PersonIcon />
                        <Typography variant='text' marginTop={'-30px'} padding={'8px'} marginLeft={'-10px'} >
                            Personal Info
                        </Typography>
                    
                </NavLink>
                <NavLink style={navLinkStyles} to={'/workexperience'}>
                  
                    <WorkIcon />
                    <Typography variant='text'  marginTop={'-30px'} padding={'8px'} marginLeft={'15px'}>
                        Work Experience
                    </Typography>
                  
                </NavLink>
                <NavLink style={navLinkStyles} to={'/education'}>
                   
                        <SchoolIcon/>
                        <Typography variant='text'  marginTop={'-30px'} padding={'8px'} marginLeft={'-31px'}>
                            Education
                        </Typography>
                   
                </NavLink>
                <NavLink style={navLinkStyles} to={'/keyskill'}>
                   
                        <EngineeringIcon />
                        <Typography variant='text'  marginTop={'-30px'} padding={'8px'}  marginLeft={'-41px'}>
                            Key Skill
                        </Typography>     
                   
                </NavLink>
                </nav>
            </ButtonGroup>
        </Box>
    </div>
  )
}

export default SideBar