import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './assets/logo.png'
import {Link} from 'react-router-dom'
import './About.css'

function About() {

  return (
    <div id="About">
      
    <div className='about'>

<Card className="text-center"style={{backgroundColor:"#013"}} data-aos="fade-up"   data-aos-duration="2000">
      <Card.Header  style={{backgroundColor:"#014587",marginTop:"0px",color:"white",fontSize:"20px",height:"120px",display:"flex",alignItems:"center",justifyContent:"center"}}>Our College</Card.Header>
      <Card.Body  style={{backgroundColor:"#013"}}>
        <Card.Title   style={{fontSize:"40px",color:"rgb(251, 197, 49)"}}><h1>K.S.R COLLEGE OF ENGINEERING</h1></Card.Title>
        <Card.Text style={{color:"white",lineHeight:"30px"}}>
        (An Autonomous In stitution, Approved by AICTE, New Delhi,<br/>
Affilated to Anna University, Chennai,<br/>
Accreditated by NAAC with ‘ A++’ Grade and IS0 - 2008 Certificate Institution)<br/>
Tiruchengode - 637 215 
        </Card.Text >
        <img src={logo} style={{width:"100px",height:"100px"}}/><br/><br/>
        <Button style={{padding:"10px 45px"}} variant="primary"><Link to="https://ksrce.ac.in/" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Visit</Link></Button><br/><br/>
        <Card.Text  style={{color:"white",lineHeight:"30px"}}>
        The goal of this symposium is to bring together engineering students to focus on understanding the latest and emerging trends in Information Technology, <br/> and establishing new group efforts in these areas. Hence,  we would like to cordially invite all the students to actively participate<br/> in all the events which  would benefit them in their academics  and co-curricular activities.
        </Card.Text>
      </Card.Body>
      <Card.Footer  style={{backgroundColor:"#014587",color:"green",fontSize:"20px",height:"120px",display:"flex",alignItems:"center",justifyContent:"center"}} className="text-muted">Thank You</Card.Footer>
    </Card>
    </div>
     </div>
  )
}

export default About