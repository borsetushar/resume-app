import { Paper, Stack,Typography,TextField , MenuItem, Button} from '@mui/material'
import React,{useEffect, useState} from 'react'
import Header from '../Header'
import SideBar from './SideBar'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm, Controller} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { CLEAR_PERSONALINFO, SET_WORK_EXPERIENCE } from '../../State/Actions/Constants/actionTypes'

function WorkExperience() {

  const [jobTitle,setJobTitle]=useState("");
  const [orgnizationName,setOrgnizationName]=useState("");
  const [startYear,setStartYear]=useState("");
  const [endYear,setEndYear]=useState("");

  const { control, formState: {errors},formState,setValue ,trigger} = useForm({mode:'onBlur'});

  useEffect(() => {
    const storedData = localStorage.getItem('WorkExperienceData');
    if (storedData) {
      const { jobTitle, orgnizationName, startYear, endYear } = JSON.parse(storedData);
      setJobTitle(jobTitle);
      setOrgnizationName(orgnizationName);
      setStartYear(startYear);
      setEndYear(endYear);

     setValue("jobTitle", jobTitle);
     setValue("orgnizationName", orgnizationName);
     setValue("startYear", startYear);
     setValue("endYear", endYear);
    }
  }, [setValue]);

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit= (e)=>{
      e.preventDefault();
       
       trigger();

      const data = {
        jobTitle,
        orgnizationName,
        startYear,
        endYear,
      };

      localStorage.setItem('WorkExperienceData', JSON.stringify(data)); // save to localStorage


      dispatch({type: SET_WORK_EXPERIENCE, payload:data})
      navigate( isFormValid ?'/education' : "#");
  };

 const handleBackButton=()=>{
  dispatch({type: CLEAR_PERSONALINFO})
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
                position: 'relative',
              }}
        >   
            <Stack direction={'row'} sx={{marginLeft:'40px', paddingTop: '5px',}}>
              <Typography variant='h6' fontWeight={'bold'}>Work Experience</Typography>
            </Stack>
            <Stack direction={'row'} sx={{marginLeft:'40px', paddingTop: '5px',}}>
              <Typography variant='body2'>Experience 1</Typography>
            </Stack><hr/>
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>

            <Controller
                    control={control}
                    name="jobTitle"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Job title'
                        variant='outlined'
                        {...field}
                        error={errors.jobTitle !== undefined}
                        helperText={errors.jobTitle?.message}
                        onChange={(e) => {
                          setJobTitle(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="orgnizationName"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Orgnization Name'
                        variant='outlined'
                        {...field}
                        error={errors.orgnizationName !== undefined}
                        helperText={errors.orgnizationName?.message}
                        onChange={(e) => {
                          setOrgnizationName(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px', }}>
             <Controller
                    control={control}
                    name="startYear"
                    defaultValue=""
                    rules={{ required: 'This field is required',validate:(value)=>{
                      return value !=='' || 'Please select a year';
                    } }}
                    
                    render={({ field }) => (
                      <TextField
                        select
                        size="small"
                        label='Start year'
                        variant='outlined'
                        style={{ width: '50%' }}
                        // value={field.value}
                        {...field}
                        error={errors.startYear !== undefined}
                        helperText={errors.startYear?.message}
                        onChange={(e) => {
                          setStartYear(e.target.value);
                          field.onChange(e);
                        }}
                        
                      > 
                          <MenuItem value=''>Select Year</MenuItem>
                          <MenuItem value='2011'>2011</MenuItem>
                          <MenuItem value='2012'>2012</MenuItem>
                          <MenuItem value='2013'>2013</MenuItem>
                          <MenuItem value='2014'>2014</MenuItem>
                          <MenuItem value='2015'>2015</MenuItem>
                          <MenuItem value='2016'>2016</MenuItem>
                          <MenuItem value='2017'>2017</MenuItem>
                          <MenuItem value='2018'>2018</MenuItem>
                          <MenuItem value='2019'>2019</MenuItem>
                          <MenuItem value='2020'>2020</MenuItem>
                          <MenuItem value='2021'>2021</MenuItem>
                          <MenuItem value='2022'>2022</MenuItem>
                          <MenuItem value='2023'>2023</MenuItem>
                      </TextField>
                    )}
                  /> 

                  <Controller
                    control={control}
                    name="endYear"
                    defaultValue=""
                    rules={{ required: 'This field is required',validate:(value)=>{
                      return value !=='' || 'Please select a year';
                    } }}
                    
                    render={({ field }) => (
                      <TextField
                        select
                        size="small"
                        label='End year'
                        variant='outlined'
                        style={{ width: '50%' }}
                        // value={field.value}
                        {...field}
                        error={errors.endYear !== undefined}
                        helperText={errors.endYear?.message}
                        onChange={(e) => {
                          setEndYear(e.target.value);
                          field.onChange(e);
                        }}
                        
                      > 
                          <MenuItem value=''>Select Year</MenuItem>
                          <MenuItem value='Present'>Present</MenuItem>
                          <MenuItem value='2011'>2011</MenuItem>
                          <MenuItem value='2012'>2012</MenuItem>
                          <MenuItem value='2013'>2013</MenuItem>
                          <MenuItem value='2014'>2014</MenuItem>
                          <MenuItem value='2015'>2015</MenuItem>
                          <MenuItem value='2016'>2016</MenuItem>
                          <MenuItem value='2017'>2017</MenuItem>
                          <MenuItem value='2018'>2018</MenuItem>
                          <MenuItem value='2019'>2019</MenuItem>
                          <MenuItem value='2020'>2020</MenuItem>
                          <MenuItem value='2021'>2021</MenuItem>
                          <MenuItem value='2022'>2022</MenuItem>
                          <MenuItem value='2023'>2023</MenuItem>
                      </TextField>
                    )}
                  />       
                    
            </Stack> 
            <hr style={{marginTop:'35px'}} />
            <Stack direction={'row'} spacing={2} padding={2} sx={{marginLeft:'340px'}}>
              <nav>
                <NavLink to={'/details'} style={navLinkStyle} >
                  <Button variant='outlined'  onClick={handleBackButton}
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
                  >Next</Button>
                </nav>
            </Stack> 
        </Paper>
        </form>
    </>
  )
}

export default WorkExperience