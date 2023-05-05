import { Avatar, Button, Input, Paper, Stack, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { SET_PERSONAL_INFO } from '../../State/Actions/Constants/actionTypes'
import PhotoCamera from "@mui/icons-material/PhotoCamera";


function PersonalInfo() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCIty] = useState("");
  const [state,setState] = useState("");
  const [postalCode,setPostalCode]=useState("");
  const [objective,setObjective] = useState("");
  const [image, setImage] = useState(null);

  const { control, formState: {errors},formState,setValue,trigger} = useForm({mode:'onBlur'});


  useEffect(() => {
    const storedData = localStorage.getItem('PersonalInfoData');
    if (storedData) {
      const { firstName, lastName, email, mobile, address, city, state, postalCode, objective, image } = JSON.parse(storedData);
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setMobile(mobile);
      setAddress(address);
      setCIty(city);
      setState(state);
      setPostalCode(postalCode);
      setObjective(objective);
      setImage(image);

     setValue("firstName", firstName);
     setValue("lastName", lastName);
     setValue("email", email);
     setValue("mobile", mobile);
     setValue("address", address);
     setValue("city", city);
     setValue("state", state);
     setValue("postalCode", postalCode);
     setValue("objective", objective);
    }
  }, [setValue]);

  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit= (e)=>{
      e.preventDefault();
       
       trigger();

     const data = {
         firstName,
         lastName,
         email,
         mobile,
         address,
         city,
         state,
         postalCode,
         objective,
         image
       };

  

       localStorage.setItem('PersonalInfoData', JSON.stringify(data)); // save to localStorage
      
      dispatch({type: SET_PERSONAL_INFO, payload:data})
      navigate( isFormValid ?'/workexperience' : "#");
  };

  

 const navLinkStyle = ()=>{
  return{
    textDecoration: 'none',
    padding:'5px',
  }
 }

 
 const isFormValid = Object.keys(errors).length === 0 && formState.isDirty;

 const handleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
};

  return (
    <>
      
      <Paper 
        sx={{
          height:'870px',
          width: '610px',
          marginTop: '-200px',
          marginLeft: '320px',
          padding:'35px',
          position: 'relative',
        }}
        >
         <form onSubmit={ isFormValid ? handleSubmit : (e) => e.preventDefault(trigger())}>
            <Stack direction={'row'} sx={{marginLeft:'50px',}}>
                <Avatar  src={image} sx={{ width: '140px', height:'140px',}}/>
            </Stack>
            <Stack direction={'row'} sx={{marginLeft:'54px', paddingTop: '5px',}}>
              <Input type="file" 
                accept="image/*"
                id="contained-button-file"
                sx={{display:"none",}}
                onChange={handleImageChange}/>
                <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Change Profile Picture
                </Button>
      </label>
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>
                  <Controller
                    control={control}
                    name="firstName"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='First Name'
                        variant='outlined'
                        {...field}
                        error={errors.firstName !== undefined}
                        helperText={errors.firstName?.message}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 <Controller
                    control={control}
                    name="lastName"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Last Name'
                        variant='outlined'
                        {...field}
                        error={errors.lastName !== undefined}
                        helperText={errors.lastName?.message}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>
            <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    rules={{ required: 'This field is required',pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: 'Invalid email format',
                    }, }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Email'
                        variant='outlined'
                        {...field}
                        error={errors.email !== undefined}
                        helperText={errors.email?.message}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />

                <Controller
                    control={control}
                    name="mobile"
                    defaultValue=""
                    rules={{ required: 'This field is required',pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Invalid phone number'
                    } }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Mobile'
                        variant='outlined'
                        {...field}
                        error={errors.mobile !== undefined}
                        helperText={errors.mobile?.message}
                        onChange={(e) => {
                          setMobile(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  />  
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>

            <Controller
                    control={control}
                    name="address"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Address'
                        variant='outlined'
                        {...field}
                        error={errors.address !== undefined}
                        helperText={errors.address?.message}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          field.onChange(e);
                        }}
                        sx={{ width:'484px'}}
                      />
                    )}
                  /> 
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>
            <Controller
                    control={control}
                    name="city"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='City'
                        variant='outlined'
                        {...field}
                        error={errors.city !== undefined}
                        helperText={errors.city?.message}
                        onChange={(e) => {
                          setCIty(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  /> 
                  
                  <Controller
                    control={control}
                    name="state"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='state'
                        variant='outlined'
                        {...field}
                        error={errors.state !== undefined}
                        helperText={errors.state?.message}
                        onChange={(e) => {
                          setState(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  /> 
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>

            <Controller
                    control={control}
                    name="postalCode"
                    defaultValue=""
                    rules={{ required: 'This field is required',pattern: {
                      value: /^[1-9][0-9]{5}$/,
                      message: 'Invalid postal code'
                    } }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Postal code'
                        variant='outlined'
                        {...field}
                        error={errors.postalCode !== undefined}
                        helperText={errors.postalCode?.message}
                        onChange={(e) => {
                          setPostalCode(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  /> 
                 
            </Stack> 
            <Stack direction={'row'} spacing={4} padding={2} sx={{marginLeft:'40px',}}>

            <Controller
                    control={control}
                    name="objective"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label='Objective'
                        variant='outlined'
                        multiline
                        maxRows={7}
                        sx={{
                          width: '550px',
                        }}
                        {...field}
                        error={errors.objective !== undefined}
                        helperText={errors.objective?.message}
                        onChange={(e) => {
                          setObjective(e.target.value);
                          field.onChange(e);
                        }}
                      />
                    )}
                  /> 
                 
            </Stack>
            <Stack direction={'row'} spacing={2} padding={2} sx={{marginLeft:'340px'}}>
              <nav>
                <NavLink to={'/'} style={navLinkStyle}>
                  <Button variant='outlined' 
                  sx={{
                    boxShadow: 'none',
                    textTransform: 'none',
                    fontSize: 16,
                    padding: '6px 12px',
                    border: '1px solid',
                    lineHeight: 1.5,
                    borderColor: '#0063cc',
                    width:'100px',
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
                  <Button variant='outlined' type="submit" 
                    sx={{
                      boxShadow: 'none',
                      textTransform: 'none',
                      fontSize: 16,
                      padding: '6px 12px',
                      border: '1px solid',
                      lineHeight: 1.5,
                      borderColor: '#0063cc',
                      width:'100px',
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
            </form>
        </Paper>
        
    </>
  )
}

export default PersonalInfo