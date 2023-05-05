import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux';


function Temp3() {
    const personalInfoData = useSelector( state=>state.setPersonalInfo);
    const workExperienceData = useSelector(state=>state.setWorkExperience);
    const educationData = useSelector(state=>state.setEducation);
    const keySkillsData = useSelector(state=>state.setKeySkills);
        console.log('this is useSelector called') 
  return (
    <>
        <Box sx={{
            padding:'32px',
            maxWidth: '550px',
        }} elevation={4}>
            <Stack direction={'row'} height={'140px'} backgroundColor={'purple'}>
                 <Box marginTop={'10px'} marginRight={'10px'}>
                 {personalInfoData.map((personalInfoData,index)=>(
                           <Box key={index} >
                                <Box>
                                 <img src={personalInfoData.image} alt='perimg3' style={{ width: '130px', height: '120px',borderRadius :'50%', marginTop: '-25px' }} />
                                </Box>
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
                        marginTop: '50px',
                        marginRight: '60px',
                        fontSize: '17px',
                        fontFamily: 'Georgia',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    >
                        CHRIS CANDIDATE
                    </Typography>
                    <Typography variant='body2'
                    sx={{
                        marginTop: '5px',
                        marginRight: '70px',
                        fontFamily: 'Georgia',
                        color: 'white',
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
                            <Typography variant='body2' color='white'
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
                    <Box color={'black'} backgroundColor={'purple'} sx={{
                        marginTop:'-11px',
                        width:'550px',
                        marginLeft:'-10px',
                    }}>
                        
                            <Typography variant='body2'
                            sx={{
                                textAlign: 'start',
                                fontFamily:'Georgia',
                                maxWidth:'690px',
                                color:'white',
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
                    backgroundColor:'white',
                    height:'18px',
                    marginTop: '10px',
                    maxWidth:"690px"
                }}
            >
                <Typography variant='subtitle2' component={'h6'} textAlign={'start'} sx={{
                    fontFamily: 'Georgia',
                    fontWeight:'bold',
                    color:'purple',
                }}>Professional Experience:</Typography>
            </Box> <hr />
            <Stack direction='row' marginTop={'10px'}>
                <Box display='flex' alignItems='start'>
                    <Box
                         sx={{
                        width:'180px',
                        maxheight:'400px',
                        }}
                    >
                        <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'purple',
                            fontWeight:'bold',
                        }}
                        >
                            Personal Information: 
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='start'
                        sx={{
                            width: '450px',
                            marginTop: '0px',
                            textAlign: 'start',
                            maxheight:'50px',
                        }}
                    >
                    <Box sx={{
                        borderBlock: '10px',
                        maxheight:'400px',
                        width:'350px'
                    }}>
                    <ul>
                         <li> 
                        <Typography variant='body2' 
                        sx={{
                            fontFamily: 'Georgia',
                            maxwidth:'25px',
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
                     <Box>
                        <Typography variant='body2' component='h2' fontWeight={'bold'} paddingTop={'10px'}
                        sx={{
                            fontFamily: 'Georgia',
                            marginLeft:'-175px',
                            color:'purple'
                        }}
                        >
                            Work Experience: 
                        </Typography>
                     </Box>   
                        <Box sx={{maxheight:'200px',width:'350px'}}>
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
                        <Typography variant='body2' paddingTop={'10px'}
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
                    backgroundColor:'white',
                    height:'20px',
                    marginTop: '10px',
                }}
            >
                <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'Purple',
                            fontWeight:'bold',
                        }}
                        >
                           Education: 
                        </Typography>
            </Box><hr />
            <Stack direction='row'>
                <Box display='flex' alignItems='start'>
                    <Box display='flex' flexDirection='column' alignItems='start'
                        sx={{
                            width: '400px',
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
                                width:'500px',
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
                    </Box>
                </Box>
            </Stack>
            <Box
                sx={{
                    backgroundColor:'white',
                    height:'20px',
                    marginTop: '10px',
                }}
            >
                 <Typography variant='subtitle2' component='h6'
                        sx={{
                            textAlign:'start',
                            fontFamily: 'Georgia',
                            color: 'purple',
                            fontWeight:'bold',
                        }}
                        >
                            Skills: 
                        </Typography>
            </Box><hr />               
                    <Box display='flex' direction='column' alignItems='start'
                        sx={{
                            width: '450px',
                            textAlign: 'start',
                            maxheight:'100px',
                            marginTop:'-20px'
                        }}>
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
                            <Typography variant='body2' fontFamily='Georgia'>
                            <p>Skill 4 : {keySkillsData.map((skill, index) => (
                            <span key={index}>{skill.skill4}</span>
                            ))}
                            </p>
                            </Typography>
                            </li>
                        </ul>
                    </Box>           
        </Box>
    </>
  )
 }
export default Temp3;