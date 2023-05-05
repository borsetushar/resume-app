import React,{useEffect, useState} from 'react'
import { Paper,Stack,Typography,TextField,Button } from '@mui/material'
import Header from '../Header'
import SideBar from './SideBar'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm, Controller} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { CLEAR_EDUCATION, SET_KEYSKILLS } from '../../State/Actions/Constants/actionTypes'


function KeySkills() {

  const [skill1,setSkill1]=useState("");
  const [skill2,setSkill2]=useState("");
  const [skill3,setSkill3]=useState("");
  const [skill4,setSkill4]=useState("");

  const { control, formState: {errors},formState,trigger,setValue} = useForm({mode:'onBlur'});


  useEffect(() => {
    const storedData = localStorage.getItem('KeySkillData');
    if (storedData) {
      const { skill1, skill2, skill3, skill4 } = JSON.parse(storedData);
      setSkill1(skill1);
      setSkill2(skill2);
      setSkill3(skill3);
      setSkill4(skill4);

     setValue("skill1", skill1);
     setValue("skill2", skill2);
     setValue("skill3", skill3);
     setValue("skill4", skill4);
    }
  }, [setValue]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit= (e)=>{
    e.preventDefault();
     
     trigger();

    const data = {
      skill1,
      skill2,
      skill3,
      skill4,
    };

    localStorage.setItem('KeySkillData', JSON.stringify(data)); // save to localStorage


    dispatch({type: SET_KEYSKILLS, payload:data})
    navigate( isFormValid ?'/preview' : "#");
};

   const handleBackButton=()=>{
   dispatch({type: CLEAR_EDUCATION})
   }
  const navLinkStyle = ()=>{
    return{
      textDecoration: 'none',
      padding:'5px',
    }
   }
   
  const isFormValid = Object.keys(errors).length === 0 && formState.isDirty;

  return (
    <>
    <Header/>
    <SideBar/>
    <form onSubmit={ isFormValid ? handleSubmit : (e) => e.preventDefault(trigger())}>
        <Paper
            sx={{
                height:'380px',
                width: '610px',
                marginTop: '-170px',
                marginLeft: '320px',
                padding:'35px',
                position: 'relative'
              }}
        >   
            <Stack direction={'row'} sx={{marginLeft:'40px', paddingTop: '5px',}}>
              <Typography variant='h6' fontWeight={'bold'}>Key Skills</Typography>
            </Stack>
            <Stack direction={'row'} sx={{marginLeft:'40px', paddingTop: '5px',}}>
              
            </Stack><hr/>
            <Stack direction={'row'} spacing={4} paddingTop={6} sx={{marginLeft:'54px',}}>
            <Controller
                    control={control}
                    name="skill1"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Skill1'
                        variant='outlined'
                        {...field}
                        error={errors.skill1 !== undefined}
                        helperText={errors.skill1?.message}
                        onChange={(e) => {
                          setSkill1(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 
                    <Controller
                    control={control}
                    name="skill2"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Skill2'
                        variant='outlined'
                        {...field}
                        error={errors.skill2 !== undefined}
                        helperText={errors.skill2?.message}
                        onChange={(e) => {
                          setSkill2(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                   
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>
            <Controller
                    control={control}
                    name="skill3"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Skill3'
                        variant='outlined'
                        {...field}
                        error={errors.skill3 !== undefined}
                        helperText={errors.skill3?.message}
                        onChange={(e) => {
                          setSkill3(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 
                     <Controller
                    control={control}
                    name="skill4"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Skill4'
                        variant='outlined'
                        {...field}
                        error={errors.skill4 !== undefined}
                        helperText={errors.skill4?.message}
                        onChange={(e) => {
                          setSkill4(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 
            </Stack>
            <hr style={{marginTop:'35px'}} />
            <Stack direction={'row'} spacing={2} padding={2} sx={{marginLeft:'340px'}}>
              <nav>
                <NavLink to={'/education'} style={navLinkStyle}>
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
                  <Button variant='outlined' type='submit' 
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
                  >Preview</Button>
                 </nav> 
            </Stack> 
        </Paper>
        </form> 
    </>
  )
}

export default KeySkills