import React from 'react'
import Marquee from 'react-fast-marquee'
import mar1 from '../src/assets/1.jpeg'
import mar2 from '../src/assets/bug.png'
import "./Corosel.css"
import mar3 from '../src/assets/poster.jpg'
import mar4 from '../src/assets/pubg.jpg'
import mar5 from '../src/assets/insta.jpg'
import mar6 from '../src/assets/paper.jpg'
import mar7 from '../src/assets/talent.jpg'
import mar8 from '../src/assets/contact.jpg'
import {Link} from "react-router-dom"
// import dkhido from "../src/assets/whatsapp.png"
import {BsArrowUpSquareFill} from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
function Corosel() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div >
      <a href='https://wa.me/916369156106' style={{float:"left",position: 'fixed', bottom: '20px', left: '20px', zIndex: '9999'}}><img src={<FontAwesomeIcon icon="fa-brands fa-whatsapp" bounce />} style={{width:"250px",height:"60px"}} /></a>
    <h1 style={{textAlign:"center",marginTop:"30px"}} >Event   <Link to="" onClick={scrollToTop} style={{color:"white",fontSize:"30px",float:"right",position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999'}}><BsArrowUpSquareFill/></Link></h1>
  <Marquee pauseOnHover flexDirection speed={80} style={{marginTop:"30px"}}>
 
  <div className='scrool'>

    <img src={mar1}/>
    <img src={mar8}/>
    <img src={mar2}/>
    <img src={mar3}/>
    <img src={mar6}/>
    <img src={mar4}/>
    <img src={mar5}/>
  
    <img src={mar7}/>
   
    
  
  </div>
  </Marquee>


    </div>
  )
}

export default Corosel

