import React from 'react'
import Marquee from 'react-fast-marquee'
import brow from '../src/assets/browsher-1-01.jpg'
import brow1 from '../src/assets/browsher-1-02.jpg'
import brow2 from '../src/assets/browsher-1-03.jpg'
import brow3 from '../src/assets/browsher-1-04.jpg'
import brow4 from '../src/assets/browsher-1-05.jpg'
import brow5 from '../src/assets/browsher-1-06.jpg'
import brow6 from '../src/assets/browsher-1-07.jpg'
import brow7 from '../src/assets/browsher-1-08.jpg'
import brow8 from '../src/assets/browsher-1-09.jpg'
function Trans() {
  return (
    <div>
<h1 style={{textAlign:"center",marginTop:"30px"}}>Browsher</h1>
  <Marquee pauseOnHover flexDirection-right speed={80} style={{marginTop:"30px"}}>

  <div className='scrool' style={{padding:"10px"}}>

    <img src={brow}/>
    <img src={brow1}/>
    <img src={brow2}/>
    <img src={brow3}/>
    <img src={brow4}/>
    <img src={brow5}/>
    <img src={brow6}/>
    <img src={brow7}/>
    <img src={brow8}/>
    <img src={brow}/>
    <img src={brow1}/>
    <img src={brow2}/>
    <img src={brow3}/>
    <img src={brow4}/>
    <img src={brow5}/>
    <img src={brow6}/>
    <img src={brow7}/>
    <img src={brow8}/>
   
    
  
  </div>
  </Marquee>
    </div>
  )
}

export default Trans