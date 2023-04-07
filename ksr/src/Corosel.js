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

function Corosel() {
  return (
    <div>
    <h1 style={{textAlign:"center",marginTop:"30px"}}>Event</h1>
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