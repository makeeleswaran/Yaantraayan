import React,{useState} from 'react';
import logo from "./assets/1.jpeg"
import ppt from "./assets/paper.jpg"
import poster from "./assets/poster.jpg"
import bug from "./assets/bug.png"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor:"rgb(228,181,38);",
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Event() {

  return (
    <div>
     
      <div>
        
        <Box sx={{backgroundColor:"#013",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}sm={12}xl={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}} data-aos="flip-left"  data-aos-duration="1200">
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"400px",md:"400px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}}>
            <img src={logo} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}} data-aos="fade-up"   data-aos-duration="1000">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}} >
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Quiz</Box></div>
            <p style={{color:"white",fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
explicabo quisquam culpa labore deserunt veniam
repellat, iure repellendus soluta.</p>
``
      <ColorButton style={{textDecoration:"none"}}>Register</ColorButton>
    
</Box>
        </Grid>
      </Grid>
    </Box>
   
    </Container>
      </Box>
      {/* ************************************* DEBUGGING ********************************* */}

      <Box sx={{backgroundColor:"#014",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"400px",md:"400px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}} data-aos="flip-right"  data-aos-duration="1200">
            <img src={bug} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}} data-aos="fade-up"   data-aos-duration="1000">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Debugging</Box></div>
            <p style={{color:"white",fontSize:"25px"}}>A team may have 2-4 members.Prelims consist of 15 questions and there is a sorting procedure for final round.Final round consist of 20 questions
Each question has a 30-second of time limit</p>
``
      <ColorButton style={{textDecoration:"none"}}>Register</ColorButton>
    
</Box>
        </Grid>
      </Grid>
    </Box>
   
    </Container>
      </Box>
      {/* ******************************************PPT*************************************** */}


      <Box sx={{backgroundColor:"#013",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"400px",md:"400px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}}data-aos="flip-left"   data-aos-duration="1200">
            <img src={ppt} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}}data-aos="fade-up"   data-aos-duration="1000">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>PPT</Box></div>
            <p style={{color:"white",fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
explicabo quisquam culpa labore deserunt veniam
repellat, iure repellendus soluta.</p>
``
      <ColorButton style={{textDecoration:"none"}}>Register</ColorButton>
    
</Box>
        </Grid>
      </Grid>
    </Box>
   
    </Container>
      </Box>
{/* ************************************************POSTER DESIGN***************************************** */}

<Box sx={{backgroundColor:"#014",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background: "none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"400px",md:"400px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}}data-aos="flip-left"   data-aos-duration="1200">
            <img src={poster} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}}data-aos="fade-up"   data-aos-duration="1200">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Poster Design</Box></div>
            <p style={{color:"white",fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
explicabo quisquam culpa labore deserunt veniam
repellat, iure repellendus soluta.</p>
``
      <ColorButton style={{textDecoration:"none"}}>Register</ColorButton>
    
</Box>
        </Grid>
      </Grid>
    </Box>
   
    </Container>
      </Box>
      </div>
       </div>

  )
}

export default Event