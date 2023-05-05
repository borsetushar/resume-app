import React from 'react'
import Header from '../Header'
import { Box, Grid, IconButton, Paper } from '@mui/material'
import { useSelector } from 'react-redux'
import MoodBadIcon from '@mui/icons-material/MoodBad';
import DownloadIcon from '@mui/icons-material/Download';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyResume() {

  const resumes = useSelector(state => state.addResume.resumes);
  console.log("Data received in the component:", resumes);


  return (
    <Box>
      <Header />
    <Box sx={{ marginTop: '50px' }}>
  <h1>My Resume</h1>
  {resumes && resumes.length > 0 ? (
    <Grid container spacing={2}>
      {resumes.map((resume, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          {resume.data && resume.data.pdf && (
            <Paper sx={{ p: 2,position:'relative' }}>
              <img
                src={resume.data.pdf}
                alt={resume.data.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <a href={resume.data.pdf} download={`${resume.data.name}.png`} style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={()=>toast.success("Download successful!")}>
                <IconButton size="small" color="primary">
                  <DownloadIcon />
                </IconButton>
              </a>
            </Paper>
          )}
        </Grid>
      ))}
    </Grid>
  ) : (
   <span> <MoodBadIcon fontSize="large" />
   <h3>No resumes found.</h3> </span>
  )}
</Box>

    </Box>
  );
}

export default MyResume