import React, { useState } from 'react'
import Temp1 from '../Templates/Temp1'
import { Box,Paper,Typography,Stack, TextField, Button, Modal } from '@mui/material'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Temp2 from '../Templates/Temp2'
import Temp3 from '../Templates/Temp3'
import Temp4 from '../Templates/Temp4'
import { selectTemplate } from '../../State/Actions'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CLEAR_EDUCATION, CLEAR_KEYSKILLS, CLEAR_PERSONALINFO, CLEAR_WORKEXPERIENCE } from '../../State/Actions/Constants/actionTypes'
import { resume } from '../../State/Actions'


function Preview() {
    const selectedTemplate = useSelector((state) => state.selectedTemplate.selectedTemplate);


    const [showModal,setShowModal]=useState(false)
    const dispatch = useDispatch();

const handleDownload = async () => {
   const inputName = document.getElementById('template-name').value;
   const div = document.getElementById('Div');
   const canvas = await html2canvas(div);
   const imgData = canvas.toDataURL('image/png');
   const pdf = new jsPDF();
   pdf.addImage(imgData, 'PNG', 10, 0, pdf.internal.pageSize.getWidth() - 27, 310);
   pdf.save(`${inputName}.pdf`);
   setShowModal(true);

   const data = {
    name: inputName,
    pdf: canvas.toDataURL(),
 };
 
  dispatch(resume(data, "template"));
 };

   
 const clearLocalStorage=()=> {
    localStorage.removeItem('PersonalInfoData');
    localStorage.removeItem('WorkExperienceData');
    localStorage.removeItem('EducationData');
    localStorage.removeItem('KeySkillData');
  }
  
    const handleBackButton=()=>{
    dispatch({type: CLEAR_KEYSKILLS})
    }

    const handleClearData=()=>{
        dispatch({type: CLEAR_PERSONALINFO});
        dispatch({type:CLEAR_WORKEXPERIENCE});
        dispatch({type:CLEAR_EDUCATION});
        dispatch({type:CLEAR_KEYSKILLS});
    }

    const navLinkStyle = ()=>{
        return{
          textDecoration: 'none',
          padding:'5px',
        }
       }
  return (
    <>
    <Header/>
    <Box>
        <Box sx={{
            textAlign: 'start',
            marginLeft: '150px',
            marginTop: '100px',
        }}>
        <Typography variant='h5' sx={{fontWeight:'bold', fontFamily:'Georgia'}}>
           Resume Preview
        </Typography> 
        </Box>  
        <Stack direction={'row'} spacing={6} sx={{marginLeft:'-100px', paddingTop: '20px',}}>
            <Box sx={{marginLeft: '250px', maxHeight:'1300px',maxWidth:'650px', border:'solid grey 1px'}}> 
                 {selectedTemplate !==null && (
                    <Box id='Div' sx={{height:'auto',width:'auto'}}>
                        {(()=>{
                            console.log('selectedTemplate is logged',selectTemplate)
                            switch(selectedTemplate){
                                case 'Temp1':
                                    console.log('case 1 is logged');
                                    return <Temp1/>
                                case 'Temp2':
                                    console.log('case 2 is logged');
                                    return <Temp2/>
                                case 'Temp3':
                                    console.log('case 3 is logged');
                                    return <Temp3/>
                                case 'Temp4':
                                    console.log('case 4 is logged');
                                    return <Temp4/>
                                default:
                                    console.log('default case is getting logged');
                                    return <Temp1/>                
                            }
                        }
                        )()}
                    </Box>
                )}  
            </Box>
            <Box>
                    <Paper
                    sx={{
                        height:'200px',
                        width:'400px',
                        
                    }}
                    >
                        <Stack padding={'20px'} sx={{marginLeft:'-130px'}}>
                            <Typography variant='Primary' sx={{marginLeft:'-90px'}}>
                                Create File Name
                            </Typography>
                            <Stack padding={'20px'}>
                            <TextField  id='template-name' type='text' placeholder='Template Name'
                              size="small"  variant='outlined' defaultValue='Malton Resume'
                              sx={{
                                marginLeft:'120px',
                              }}/>
                              <Stack direction={'row'} spacing={2} padding={2} sx={{marginLeft:'110px'}}>
                                
                                    <NavLink to={'/keyskill'}style={navLinkStyle}>
                                        <Button variant='outlined' onClick={handleBackButton}
                                        sx={{
                                            boxShadow: 'none',
                                            textTransform: 'none',
                                            fontSize: 16,
                                            padding: '6px 12px',
                                            border: '1px solid',
                                            lineHeight: 1.5,
                                            borderColor: '#0063cc',
                                            width:'100px',
                                            height: '35px',
                                            '&:hover': {
                                            backgroundColor: '#0069d9',
                                            borderColor: '#0062cc',
                                            boxShadow: 'none',
                                            color:'white',
                                            },
                                            '&:active': {
                                            boxShadow: 'none',
                                            backgroundColor: '#0062cc',
                                            borderColor: '#005cbf',
                                            },
                                            '&:focus': {
                                            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                                            },
                                        }}>Back</Button>
                                </NavLink>
                                <NavLink style={navLinkStyle}>
                                    <Button variant='outlined' onClick={handleDownload}
                                        sx={{
                                        boxShadow: 'none',
                                        textTransform: 'none',
                                        fontSize: 16,
                                        padding: '6px 12px',
                                        border: '1px solid',
                                        lineHeight: 1.5,
                                        borderColor: '#0063cc',
                                        width:'100px',
                                        height: '35px',
                                        '&:hover': {
                                            backgroundColor: '#0069d9',
                                            borderColor: '#0062cc',
                                            boxShadow: 'none',
                                            color:'white',
                                        },
                                        '&:active': {
                                            boxShadow: 'none',
                                            backgroundColor: '#0062cc',
                                            borderColor: '#005cbf',
                                        },
                                        '&:focus': {
                                            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                                        },
                                        }}
                                    >Save</Button>
                                </NavLink>
                                 {showModal && (
                                <Modal open={showModal}>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        bgcolor: 'background.paper',
                                        boxShadow: 24,
                                        p: 4,
                                        borderRadius: '10px',
                                        maxWidth: '80vw',
                                        maxHeight: '80vh',
                                        overflow: 'auto',
                                        display:'flex',
                                        flexDirection:'column',
                                        alignItems:'center', 
                                        justifyContent:'center',
                                        height:'30%',
                                    }} className={showModal ? 'animate-modal visible' : 'animate-modal'}
                                    >
                                        <CheckCircleOutlineIcon color='primary' style={{ fontSize: 80 }} />
                                    <Typography variant='h5'>Template downloaded successfully!</Typography>
                                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100%'>
                                    ...
                                    <Button variant='contained' onClick={()=>{setShowModal(false); clearLocalStorage(); handleClearData()}} style={{marginTop: '16px'}}>
                                        Close
                                    </Button>
                                    </Box>
                                    </Box>
                                </Modal>
                                )} 
                            </Stack> 
                            </Stack>
                        </Stack>
                       
                    </Paper>  
                </Box>   
        </Stack>
    </Box>
    
    </>
  )
}

export default Preview