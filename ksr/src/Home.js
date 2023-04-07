import React from 'react'
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Container  from 'react-bootstrap/esm/Container';
import About from './About'
// import yan from '../src/assets/yan.png'
// // import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'; 
// import pix from "../src/assets/pexels.mp4"
// // import Stack from '@mui/material/Stack';
// // import { purple, red } from '@mui/material/colors';
// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// import Corosel from './Corosel'
import "./Home.css"
// import Event from "./Event"

// import Trans from './Trans'
// import { useEffect, useMemo, useState } from "react";


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

function Home(){
  
  return (
    <div>
    <div className='body'  data-aos="fade-up"   data-aos-duration="1000">
      
      <Container>
    <div  className='heading'>
         <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} sm={12} xl={6} style={{backgroundColor:"none"}}>
          {/* <Item > */}

<h1 className='maincontent' >K.S.R COLLEGE OF ENGINEERING</h1>
<p style={{textAlign:'start'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
explicabo quisquam culpa labore deserunt veniam
repellat, iure repellendus soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit.
explicabo quisquam culpa labore deserunt veniam
repellat, iure repellendus soluta.</p>
<ColorButton variant="contained">Visit</ColorButton><br/>

          {/* </Item> */}
        </Grid>

        <Grid  item xs={12} lg={6} sm={12} xl={6} style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
         
          <Stack spacing={2} style={{marginBottom:"150px"}}>
       
   
   
      <ColorButton variant="contained" style={{padding:"15px 20px",fontSize:"16px"}}><Link to='/Event' style={{textDecoration:"none",color:"white"}}>Technical Events</Link></ColorButton>

      <ColorButton variant="contained"  style={{padding:"15px 20px",fontSize:"16px"}}><Link to='/NonEvent' style={{textDecoration:"none",color:"white"}}>Non Technical Events</Link></ColorButton>
    
    </Stack>
          
       </Grid>
      </Grid>
    </Box>
    </div>
   
    </Container>
    </div>
    <About/>
    </div>
    
  )
}

export default Home