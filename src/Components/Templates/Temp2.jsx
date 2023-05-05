import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function Temp2() {

    const personalInfoData = useSelector( state=>state.setPersonalInfo);
    const workExperienceData = useSelector(state=>state.setWorkExperience);
    const educationData = useSelector(state=>state.setEducation);
    const keySkillsData = useSelector(state=>state.setKeySkills);
        console.log('this is useSelector called')  
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
                                <div>
                                 <img src={personalInfoData.image} alt='perimg2' style={{ width: '130px', height: '120px',borderRadius :'50%', marginTop: '-25px' }} />
                                </div>
                          </Box>
                    ))
                    }
                 </Box>
                 <Box
                 sx={{
                    
                    color :'white',
                    height: '140px',
                    width: '320px',
                 }} 
                 >
                    <Typography variant='h6'
                    sx={{
                        marginTop: '40px',
                        marginRight: '60px',
                        fontSize: '20px',
                        fontFamily: 'Georgia',
                        color: 'chocolate',
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
                 >
                    <Box sx={{
                        height: '140px',
                        Width:'250px'
                    }}>
                            <Typography variant='body2' color='chocolate'
                            sx={{
                                textAlign: 'start',
                                fontFamily:'Georgia',
                                marginTop: '16px',
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

            <Stack direction='column'>
                        <Typography variant='h6' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'chocolate',
                            fontWeight:'bold',
                        }}
                        >
                            Professional Experience: <hr color='chocolate'/>
                        </Typography>
                    
                        <Typography variant='body2' component='h2' fontWeight={'bold'}
                        sx={{
                            fontFamily: 'Georgia',
                            textAlign:'start',
                        }}
                        >
                            Personal Information: 
                        </Typography>
                    
                    <ul>
                         <li> 
                        <Typography variant='body2' 
                        sx={{
                            fontFamily: 'Georgia',
                            maxwidth:'20px',
                            textAlign:'start',
                            marginTop:'-25px',
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
                     
                        <Typography variant='body2' component='h2' fontWeight={'bold'} paddingTop={'10px'}
                        sx={{
                            fontFamily: 'Georgia',
                            textAlign:'start',
                        }}
                        >
                            Work Experience: 
                        </Typography>
                       
                    <ul>
                        <li>
                        <Typography variant='body2' 
                        sx={{
                            fontFamily: 'Georgia',
                            textAlign:'start',
                            marginTop:'-25px',
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
                            textAlign:'start',
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
                    
            </Stack>
            
            <Stack direction='column'>
               
                        <Typography variant='h6' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'chocolate',
                            fontWeight:'bold',
                        }}
                        >
                           Education: <hr color='chocolate'/>
                        </Typography>
                    
                        <ul>
                            <li>
                            <Typography variant='body2'  
                            sx={{
                                fontFamily: 'Georgia',
                                textAlign:'start',
                                marginTop:'-25px',
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
            </Stack>
           
            <Stack direction='column'>
            <Box  alignItems='start'>
                    <Box
                         sx={{
                            height:'30px',
                            marginTop: '10px',
                        }}
                    >
                        <Typography variant='h6' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'chocolate',
                            fontWeight:'bold',
                        }}
                        >
                            Skills: <hr color='chocolate'/>
                        </Typography>
                    </Box>
                    <Box display='flex' direction='column' alignItems='start'
                        sx={{
                            width: '450px',
                            textAlign: 'start',
                            maxheight:'100px',
                            marginTop:'-10px'
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

export default Temp2