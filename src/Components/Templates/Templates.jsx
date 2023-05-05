import React,{useState} from 'react'
import { Grid, Typography,Box, Button } from '@mui/material'
import Tempp1 from './Tempp1.png'
import Tempp2 from './Tempp2.png';
import Tempp3 from './Tempp3.png'
import Tempp4 from './Tempp4.png'
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectTemplate } from '../../State/Actions';


function Templates() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTemplateClick=(template)=>{
        dispatch(selectTemplate(template));
        navigate('/preview')
        console.log('handleTemplate Click loggged');
    }

//     //Hovering effect for the temp1
const [isHovered,setIsHovered]=useState(false);
const handleMouseEnter=()=>{
    setIsHovered(true);
};
const handleMouseLeave=()=>{
    setIsHovered(false);
}

    //Hovering effect for the temp2
const [isHovered2,setIsHovered2]=useState(false);
const handleMouseEnter2=()=>{
    setIsHovered2(true);
};
const handleMouseLeave2=()=>{
    setIsHovered2(false);
}

    //Hovering effect for the temp3
const [isHovered3,setIsHovered3]=useState(false);
const handleMouseEnter3=()=>{
    setIsHovered3(true);
};
const handleMouseLeave3=()=>{
    setIsHovered3(false);
}

    //Hovering effect for the temp4
const [isHovered4,setIsHovered4]=useState(false);
const handleMouseEnter4=()=>{
    setIsHovered4(true);
};
const handleMouseLeave4=()=>{
    setIsHovered4(false);
}

const NavLinkStyle = ()=>{
    return{
        textDecoration:'none',
    }
}

  return (
    <Box> 
        <Box sx={{
            textAlign: 'start',
            marginLeft: '5%',
            marginTop: '5%',
            marginBottom:'5%',
        }}>
        <Typography variant='h4' sx={{fontWeight:'bold', fontFamily:'Montserrat'}}>
           Templates
        </Typography> 
        <Typography variant='subtitle' sx={{fontFamily:'Montserrat'}}>
           Select the Template to get started with
        </Typography>
        </Box>    
        <Grid container spacing={0.5}
        sx={{
            padding:'2px',
            marginLeft:'1%'
        }}
        >
            <Grid item xs={12} md={3}>
               <Box sx={{
                width: '300px',
                height: '400px',
                backgroundColor: 'grey',
                border: '1px solid grey',
                position: 'relative',
               }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               >
                <img src={Tempp1} alt="TEMP" 
                style={{
                    width: '300px',
                    height: '400px',
                    opacity: isHovered ? 0.3 : 1,
                  }}
                />
                 {isHovered && (
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <NavLink to={'/details'} style={NavLinkStyle}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleTemplateClick('Temp1');
                    }}
                  >
                    Use Template
                  </Button>
                </NavLink>
              </Box>
            )}
                </Box>             
            </Grid>
            <Grid item xs={12} md={3}>
               <Box
               sx={{
                width: '300px',
                height: '400px',
                backgroundColor: 'grey',
                border: '1px solid grey',
                position: 'relative',
               }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
               >
                <img src={Tempp2} alt="TEMP2" 
                style={{
                    width: '300px',
                    height: '400px',
                    opacity: isHovered2 ? 0.3 : 1,
                  }}
                />
                {isHovered2 && (
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <NavLink to={'/details'} style={NavLinkStyle}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleTemplateClick('Temp2');
                    }}
                  >
                    Use Template
                  </Button>
                </NavLink>
              </Box>
            )}
               </Box>
            </Grid>
            <Grid item xs={12} md={3}>
               <Box
                sx={{
                    width: '300px',
                    height: '400px',
                    backgroundColor: 'grey',
                    border: '1px solid grey',
                    position: 'relative',
                   }}
               onMouseEnter={handleMouseEnter3}
               onMouseLeave={handleMouseLeave3}
               >
                <img src={Tempp3} alt="TEMP3" 
                style={{
                    width: '300px',
                    height: '400px',
                    opacity: isHovered3 ? 0.3 : 1,
                  }}
                />
               {isHovered3 && (
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <NavLink to={'/details'} style={NavLinkStyle}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleTemplateClick('Temp3');
                    }}
                  >
                    Use Template
                  </Button>
                </NavLink>
              </Box>
            )}
                </Box> 
            </Grid>
            <Grid item xs={12} md={3}>
               <Box
              sx={{
                width: '300px',
                height: '400px',
                backgroundColor: 'grey',
                border: '1px solid grey',
                position: 'relative',
               }}
               onMouseEnter={handleMouseEnter4}
               onMouseLeave={handleMouseLeave4}
               >
                <img src={Tempp4} alt="TEMP4" 
                style={{
                    width: '300px',
                    height: '400px',
                    opacity: isHovered4 ? 0.3 : 1,
                  }}
                />
                  {isHovered4 && (
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <NavLink to={'/details'} style={NavLinkStyle}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleTemplateClick('Temp4');
                    }}
                  >
                    Use Template
                  </Button>
                </NavLink>
              </Box>
            )}
                </Box>  
            </Grid>
        </Grid>
    </Box>
  )
};


export default Templates;