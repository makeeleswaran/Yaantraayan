import React from 'react'

import './Browsher.css'
import brow from '../src/assets/browsher-1-01.jpg'
import brow1 from '../src/assets/browsher-1-02.jpg'
import brow2 from '../src/assets/browsher-1-03.jpg'
import brow3 from '../src/assets/browsher-1-04.jpg'
import brow4 from '../src/assets/browsher-1-05.jpg'
import brow5 from '../src/assets/browsher-1-06.jpg'
import brow6 from '../src/assets/browsher-1-07.jpg'
import brow7 from '../src/assets/browsher-1-08.jpg'
import brow8 from '../src/assets/browsher-1-09.jpg'
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Browsher() {
    
  return (
    <div className="Browsher">
    
<Container>
<div className='image'>
<img src={brow}data-aos="fade-up"   data-aos-duration="1000" style={{MarginTop:"20px"}}/>
<img src={brow1}data-aos="fade-up"   data-aos-duration="1000"/>
<img src={brow2}data-aos="fade-up"   data-aos-duration="1000" />
<img src={brow3}data-aos="fade-up"   data-aos-duration="1000"/>
<img src={brow4}data-aos="fade-up"   data-aos-duration="1000" />
<img src={brow5}data-aos="fade-up"   data-aos-duration="1000"/>
<img src={brow6}data-aos="fade-up"   data-aos-duration="1000" />
<img src={brow7}data-aos="fade-up"   data-aos-duration="1000"/>
<img src={brow8}data-aos="fade-up"   data-aos-duration="1000" style={{}}/>
</div>
</Container>
    </div>
  )
}

export default Browsher
