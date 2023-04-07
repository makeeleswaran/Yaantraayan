import React from 'react'
import logo from "./assets/1.jpeg"
import insta from "./assets/insta.jpg"
import pubg from "./assets/pubg.jpg"
import poster from "./assets/poster.jpg"
import bug from "./assets/bug.png"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import talent from "./assets/talent.jpg"  
import { purple } from '@mui/material/colors';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

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

function NonEvent() {
   
  return (
    
    <div> 


        <Box sx={{backgroundColor:"#013",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"350px",md:"300px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <img src={pubg} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}} data-aos="fade-up" data-aos-duration="1000">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Pubg</Box></div>
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
      {/* ************************************* INSTA REELS ********************************* */}

      <Box sx={{backgroundColor:"#014",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"350px",md:"300px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}} data-aos="flip-right"  data-aos-duration="1200">
            <img src={insta} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}} data-aos="fade-up"  data-aos-duration="1000">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Insta Reels</Box></div>
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
      {/* ****************************************** Talent Hunted*************************************** */}


      <Box sx={{backgroundColor:"#013",width:"100%",height:"100%",backgroundPosition:"center",padding:{xs:"0px 0px 40px 0px",lg:"0px 0px 90px 0px"}}}>
          <Container>
<Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}md={6}lg={6}>
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"350px",md:"300px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}} data-aos="flip-right"  data-aos-duration="1200">
            <img src={talent} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}}data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
          <div style={{color:"white",fontSize:"px",fontFamily:"serif"}}>
          <Box sx={{fontSize:{xs:"40px",md:"70px",lg:"90px"}}}>Talent Hunt</Box></div>
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
          <Item style={{background:"none",boxShadow:"none",outline:"none",border:"none"}}>
         <Box sx={{marginTop:{xs:"30px",md:"50px",lg:"70px"},Width:{xs:"50px"},width:{xs:"270px",sm:"350px",md:"300px",lg:"508px"},height:{xs:"280px",md:"300px",lg:"578px"}}}data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
            <img src={poster} style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </Box>
            </Item>
        </Grid>

        <Grid item xs={12}md={6}lg={6}>
          <Box sx={{marginTop:{xs:"0px",md:"50px",lg:"200px"}}}data-aos="fade-down" data-aos-duration="1000">
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
  )
}

export default NonEvent