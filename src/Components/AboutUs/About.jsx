import { Paper, Stack, Typography,Box } from '@mui/material'
import React from 'react'
import Header from '../Header'
import Aboutus from './Aboutus.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function About() {

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:example@gmail.com", "_blank");
  };
    return (
      <div>
        <Header />
        <Paper
          sx={{
            height: "auto",
            width: "97%",
            marginTop: "10px",
            position: "relative",
            padding: "20px",
          }}
        >
          <Stack sx={{}}>
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Montserrat", mr: { xs: 0, md: 2 } }}>
                Resume
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                Builder
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mt: { xs: 2, md: 5 },
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  backgroundColor: "white",
                  width: { xs: "100%", md: "calc(70% - 20px)" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  padding={2}
                  textAlign={"start"}
                  fontFamily={"cursive"}
                  sx={{
                    px: { xs: 2, md: 4 },
                    py: { xs: 2, md: 4 },
                  }}
                >
                  Welcome to our online resume builder! We're a team of experienced developers who are passionate 
                  about helping job seekers create professional and effective resumes. Our platform provides a user-friendly 
                  interface that allows you to easily create and customize your resume to showcase your skills, experience, and achievements.
                  We understand that the job market can be tough, and we're here to help you stand out from the competition. 
                  Our resume builder features modern templates, customizable designs, and helpful tips and suggestions to help
                  you create a resume that will impress potential employers. Plus, our platform is completely free to use!
                  Whether you're a recent graduate, a seasoned professional, or just looking to switch careers, our resume builder can help you 
                  create a standout resume that highlights your strengths and accomplishments. Thank you for choosing our platform to help you 
                  achieve your career goals.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  width: { xs: "100%", md: "calc(30% - 20px)" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <img src={Aboutus} alt="Ab" style={{ width: "100%" }} />
              </Box>
            </Stack>
            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mt: { xs: 2, md: 5 } }}>
              <Stack sx={{ mr: { xs: 2, md: 0.5 } }}>
                <Typography variant="body1" fontWeight={"bold"} >
                  Share With your Friends
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <FacebookIcon style={{ fontSize: 35 }} color="primary" onClick={handleFacebookClick} sx={{ cursor: "pointer" }} />
                <LinkedInIcon style={{ fontSize: 35 }} color="primary" onClick={handleLinkedInClick} sx={{ cursor: "pointer" }}/>
                <WhatsAppIcon style={{ fontSize: 35 }} sx={{color:"#39FF14",cursor: "pointer"}}  onClick={handleWhatsAppClick} />
                <TwitterIcon style={{ fontSize: 35 }}  color="primary" onClick={handleTwitterClick} sx={{ cursor: "pointer" }}/>
                <EmailIcon style={{ fontSize: 35 }} onClick={handleEmailClick} sx={{ cursor: "pointer",color: '#DB4437' }}/>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </div>
    );
  }
  
  export default About;
  
