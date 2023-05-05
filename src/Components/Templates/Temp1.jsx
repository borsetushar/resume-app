import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Temp1() {
    const personalInfoData = useSelector( state=>state.setPersonalInfo);
    const workExperienceData = useSelector(state=>state.setWorkExperience);
    const educationData = useSelector(state=>state.setEducation);
    const keySkillsData = useSelector(state=>state.setKeySkills);  
       

  return (
    <>
        <Box sx={{
            padding:'32px',
            width: '550px',
        }} elevation={4}> 
            <Stack direction={'row'} height={'110px'}>
                 <Box>
                    {personalInfoData.map((personalInfoData,index)=>(
                           <Box key={index} >
                                <Box>
                                 <img src={personalInfoData.image} alt='perimg1' style={{ width: '130px', height: '120px',borderRadius :'50%', marginTop: '-25px' }} />
                                </Box>
                          </Box>
                    ))
                    }                 
                 </Box>
                 <Box
                 sx={{
                    color :'white',
                    maxHeight: '140px',
                    width: '320px',
                 }} 
                 >
                    <Typography variant='h6'
                    sx={{
                        marginTop: '40px',
                        marginRight: '60px',
                        fontSize: '20px',
                        fontFamily: 'Georgia',
                        color: 'primary.main',
                        fontWeight: 'bold',
                    }}
                    >
                        Chris Candidate
                    </Typography>
                    <Typography variant='body2'
                    sx={{
                        marginTop: '5px',
                        marginRight: '70px',
                        fontFamily: 'Georgia',
                        color: 'black',
                    }}
                    >
                        Human Resume Manager
                    </Typography>
                 </Box>
                  <Box
                 sx={{
                    
                    color :'white',
                    maxheight: '140px',
                    width: '220px',
                 }}
                 > *
                    <Box sx={{
                        maxHeight: '140px',
                        Width:'250px',
                        padding: '-40px'
                    }}>
                            <Typography variant='body2' color='primary.main'
                            sx={{
                                textAlign: 'start',
                                fontFamily:'Georgia',
                                marginTop: '-29px',
                                
                            }}
                            >
                           
                                {personalInfoData.map((personalInfoData,index)=>(
                           <Box key={index} sx={{ marginTop: '20px' }}>
                                <Box>
                                <p >{personalInfoData.firstName} {personalInfoData.lastName}</p>
                                <p >{personalInfoData.email}</p>
                                <p >{personalInfoData.mobile}</p>
                                </Box>
                          </Box>
                            ))
                            }
                               
                            </Typography>                        
                    </Box>
                 </Box> 
            </Stack>
            <Box
                sx={{
                    backgroundColor:'primary.main',
                    height:'6px',
                    marginTop: '10px',
                }}
            >
            </Box>
            <Stack
            sx={{
                padding: '10px',
            }}
            >
                <Box
                 sx={{
                    color :'white',
                    maxHeight: '220px',
                    maxwidth: '690px',
                 }}
                >
                    <Box color={'black'}  sx={{
                        width:'550px',
                        marginLeft:'-10px'
                    }}>
                        
                            <Typography variant='body2'
                            sx={{
                                textAlign: 'start',
                                fontFamily:'Georgia',
                                maxWidth:'690px',
                            }}
                            >
                            {personalInfoData.map((personalInfoData,index)=>(
                           <Box key={index} sx={{ marginTop: '20px' }}>
                                <Box>
                                <p>{personalInfoData.objective}</p>                               
                                </Box>
                          </Box>
                         ))
                         }   
                            </Typography>
                        
                    </Box>
                </Box>
            </Stack>
            <Box
                sx={{
                    backgroundColor:'primary.main',
                    height:'6px',
                    maxWidth:"690px"
                }}
            >
            </Box>
            <Stack direction='row'>
                <Box display='flex' alignItems='start'>
                    <Box
                         sx={{
                        width:'200px',
                        maxheight:'400px',
                        }}
                    >
                        <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'primary.main',
                            fontWeight:'bold',
                        }}
                        >
                            Professional Experience: 
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='start'
                        sx={{
                            width: '450px',
                            marginTop: '6px',
                            textAlign: 'start',
                            maxheight:'50px',
                        }}
                    >
                        <Typography variant='body2' component='h2' fontWeight={'bold'}
                        sx={{
                            fontFamily: 'Georgia',
                        }}
                        >
                            Personal Information: 
                        </Typography>
                    <Box sx={{
                        borderBlock: '10px',
                        maxheight:'400px',
                        width:'300px'
                    }}>
                    <ul>
                         <li> 
                        <Typography variant='body2'
                        sx={{
                            fontFamily: 'Georgia',
                            maxwidth:'20px',
                        }}>
                            
                            <p>Address: {personalInfoData.map((personalInfo, index) => (
                            <span key={index}>{personalInfo.address}</span>
                            ))}
                            </p>
                            <p>City: {personalInfoData.map((personalInfo, index) => (
                            <span key={index}>{personalInfo.city}</span>
                            ))}
                            </p>
                            <p>State: {personalInfoData.map((personalInfo, index) => (
                            <span key={index}>{personalInfo.state}</span>
                            ))}
                            </p>
                            <p>PostalCode: {personalInfoData.map((personalInfo, index) => (
                            <span key={index}>{personalInfo.postalCode}</span>
                            ))}
                            </p>
                         
                        </Typography>
                        </li> 
                     </ul>
                     </Box>
                        <Typography variant='body2' component='h2' fontWeight={'bold'} paddingTop={'10px'}
                        sx={{
                            fontFamily: 'Georgia',
                        }}
                        >
                            Work Experience: 
                        </Typography>
                        <Box sx={{maxheight:'200px',width:'300px'}}>
                    <ul>
                        <li>
                        <Typography variant='body2' 
                        sx={{
                            fontFamily: 'Georgia',
                        }}>
                           
                            <p>Job Title: {workExperienceData.map((workExperience, index) => (
                            <span key={index}>{workExperience.jobTitle}</span>
                            ))}
                            </p>
                            <p>Orgnization Name: {workExperienceData.map((workExperience, index) => (
                            <span key={index}>{workExperience.orgnizationName}</span>
                            ))}
                            </p>
                        
                        </Typography>
                        </li>
                        <li>
                        <Typography variant='body2'  paddingTop={'10px'}
                        sx={{
                            fontFamily: 'Georgia',
                        }}
                        >
                            <p>Start Year: {workExperienceData.map((workExperience, index) => (
                            <span key={index}>{workExperience.startYear}</span>
                            ))}
                            </p>
                            <p>End Year: {workExperienceData.map((workExperience, index) => (
                            <span key={index}>{workExperience.endYear}</span>
                            ))}
                            </p>
                            
                        </Typography>
                        </li>
                    </ul>
                    </Box>
                    </Box>
                </Box>
            </Stack>
            <Box
                sx={{
                    backgroundColor:'primary.main',
                    height:'6px',
                }}
            >
            </Box>
            <Stack direction='row'>
                <Box display='flex' alignItems='start'>
                    <Box
                         sx={{
                        width:'200px'
                        }}
                    >
                        <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'primary.main',
                            fontWeight:'bold',
                        }}
                        >
                           Education: 
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='start'
                        sx={{
                            width: '200px',
                            marginTop: '0px',
                            textAlign: 'start',
                            maxheight:'200px',
                        }}
                    >
                        <ul>
                            <li>
                            <Typography variant='body2' 
                            sx={{
                                fontFamily: 'Georgia',
                                width:'250px',
                            }}
                            >
                            <p>Type: {educationData.map((education, index) => (
                            <span key={index}>{education.type}</span>
                            ))}
                            </p>
                            <p>University: {educationData.map((education, index) => (
                            <span key={index}>{education.university}</span>
                            ))}
                            </p>
                            <p>Degree: {educationData.map((education, index) => (
                            <span key={index}>{education.degree}</span>
                            ))}
                            </p>
                            <p>Start Year: {educationData.map((education, index) => (
                            <span key={index}>{education.startYear}</span>
                            ))}
                            </p>
                            <p>End Year: {educationData.map((education, index) => (
                            <span key={index}>{education.endYear}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                        </ul> 
                    </Box>
                </Box>
            </Stack>
            <Box
                sx={{
                    backgroundColor:'primary.main',
                    height:'6px',
                }}
            >
            </Box>
            <Stack direction='column'>
                <Box  alignItems='start'>
                    <Box
                         sx={{
                            maxHeight:'30px',
                            width: '700px',
                            marginTop: '10px',
                        }}
                    >
                        <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'primary.main',
                            fontWeight:'bold',
                        }}
                        >
                            Skills: 
                        </Typography>
                    </Box>
                    <Box display='flex' direction='column' alignItems='start'
                        sx={{
                            width: '450px',
                            textAlign: 'start',
                            maxheight:'100px',
                            marginTop:'-30px'
                        }}
                    >
                        <ul>
                            <li>
                            <Typography variant='body2'  fontFamily='Georgia'>
                            <p>Skill 1 : {keySkillsData.map((skill, index) => (
                            <span key={index}>{skill.skill1}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                            <li>
                            <Typography variant='body2'  fontFamily='Georgia'>
                            <p>Skill 2 : {keySkillsData.map((skill, index) => (
                            <span key={index}>{skill.skill2}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                            <li>
                            <Typography variant='body2'  fontFamily='Georgia'>
                            <p>Skill 3 : {keySkillsData.map((skill, index) => (
                            <span key={index}>{skill.skill3}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                            <li>
                            <Typography variant='body2'  fontFamily='Georgia'>
                            <p>Skill 4 : {keySkillsData.map((skill, index) => (
                            <span key={index}>{skill.skill4}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Stack>
        </Box>
    </>
  )
}

export default Temp1