import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
import {Link} from "react-router-dom"
import {IoIosContact} from"react-icons/io" 
import {HiOutlineMailOpen} from "react-icons/hi"
import {GrInstagram} from "react-icons/gr"
import {ImWhatsapp} from "react-icons/im"
import {GrLocation} from "react-icons/gr"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import {BsArrowUpSquareFill} from "react-icons/bs"
// import {wh} from "./assets/whatsapp.png";
function Footer() {

    // function scrollToTop() {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth"
    //     });
    //   }
  return (
    <div>
    <section style={{textAlign:"center"}}><b>Footer</b></section>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Zolo's<span> Yantraayaan</span></h3>

				<p class="footer-links">
					<a href="#Home" class="link-1">Home</a>
					
					<a href="#About">About</a>
				
					<a href="#Contact">Contact</a>
				
					<a href="#Event">Event</a>
					
					{/* <a href="#">Faq</a>
					
					<a href="#">Contact</a> */}
				</p>

				<p class="footer-company-name" style={{color:"white"}}>Company Name © 2015</p>
			</div>

			<div class="footer-center" style={{lineHeight:"50px"}}>

				<div>
					<Link to="" style={{color:"white"}} ><MyLocationIcon/></Link>
					<p>Tiruchengode, KSR Kalvi Nagar, Tamil Nadu 637215</p>
				</div>

				<div>
					<Link to="6369156106" style={{color:"white"}}><IoIosContact/></Link>
					<p>+91 6369156106</p>
				</div>

				<div>
                <Link to="" style={{color:"white"}}><HiOutlineMailOpen/></Link>
					<p><a href="mailto:support@company.com">ksrce@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
                {/* <Link to="" onClick={scrollToTop} style={{color:"white",fontSize:"30px"}}><BsArrowUpSquareFill/></Link> */}
					<span>K.S.R COLLEGE OF ENGINEERING</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<Link to="/Contact"><IoIosContact /></Link>
                    <Link to="/Mail"><HiOutlineMailOpen /></Link>
                    <Link to="https://www.instagram.com/_l_i_p_l_o_c_k_e_r/?igshid=NTc4MTIwNjQ2YQ%3D%3D"><GrInstagram /></Link>
                    <Link to="/whatsapp"><ImWhatsapp/></Link>
					

				</div>
				

			</div>

		</footer>
     </div>
  )
}

export default Footer