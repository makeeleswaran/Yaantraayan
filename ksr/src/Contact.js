import React from 'react'
import con from './assets/Register.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';
import Card from 'react-bootstrap/Card';



function Contact() {
  return (
    <div style={{backgroundColor:"#013",width:"100%"}}>

<div style={{textAlign:"center",marginTop:"0px"}}>

</div>
<span style={{marginTop:"0px"}}></span>
      {/* <h1 style={{textAlign:"center",fontSize:"40px",marginTop:"5px",marginBottom:"30px",color:"#192a56",display:"flex",flexDirection:"column",justifyContent:'center'}}>Contact</h1> */}
     <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <div class="row">
     
      <h2 style={{marginTop:"5px",display:"flex",justifyContent:"center",color:"white"}}>Contact Details</h2>
      
        <div class="col-lg-6 col-12" style={{marginTop:"10px"}}>
        <img src={con} style={{width:"100%",height:"90%",objectFit:"cover"}}/>
        </div>
        <div class="col-lg-6 col-12" style={{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",marginBottom:"40px",marginTop:"10px"}}>
          {/* <h2 style={{textAlign:"center"}}><ContactPageIcon style={{fontSize:"50px",color:"#1e3799"}}/>Contact Details</h2> */}

          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> < PhoneIcon style={{fontSize:"30px"}}/>Contact</Card.Title>
      
        <Card.Text>
         +91 82208 87181<br/>
         +91 94427 11916
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
<br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> < DraftsIcon style={{fontSize:"30px"}}/>  Email</Card.Title>
      
        <Card.Text>
        yaantraayan23@gmail.com<br/>
       
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
<br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> < InstagramIcon style={{fontSize:"30px"}}/>Instagram</Card.Title>
      
        <Card.Text>
        ksrce_mca
       
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
          {/* <div style={{display:"flex",alignItems:"center",marginLeft:"20px"}}>
            < PhoneIcon style={{fontSize:"30px"}}/>
            <Box sx={{fontSize:{xs:"20px",sm:"22px",md:"30px",lg:"40px",xxl:"40px"}}}>
          <p style={{color:"#353b48"}}>+91 82208 87181<br/>
+91 94427 11916</p></Box>
          </div> */}

          {/* <div style={{display:"flex",alignItems:"center",marginLeft:"20px"}}>
            < DraftsIcon style={{fontSize:"30px"}}/>  
            <Box sx={{fontSize:{xs:"20px",sm:"22px",md:"30px",lg:"40px",xxl:"40px"}}}>
          <p style={{color:"#353b48"}}>yaantraayan23@gmail.com<br/>
</p></Box>
          </div> */}

          {/* <div style={{display:"flex",alignItems:"center",marginLeft:"20px"}}>
            < InstagramIcon style={{fontSize:"30px"}}/>
            <Box sx={{fontSize:{xs:"20px",sm:"22px",md:"30px",lg:"40px",xxl:"40px"}}}>
          <p style={{color:"#353b48"}}>ksrce_mca
</p></Box> */}
          </div>
      
        </div>
      </div>

     </div>
      // </div>
  )
}

export default Contact