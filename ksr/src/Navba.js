import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import './Navba.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import yan from '../src/assets/yan.png'
function Navba() {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb- 3 header">
          <Container >
            <Navbar.Brand href="/Browsher"><img src={yan} style={{width:"100px",height:"50px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{color:"grey",fontSize:"30px",fontFamily:"cursive"}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                Yaantrayan
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{color:"black",backgroundColor:"rgb(48,44,63)",textAlign:"center",fontFamily:"poppins"}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                
                  <Link  className='headertext' to="/Home" >Home</Link>  
                  <Link  className='headertext' to="/About">About</Link>
                  <Link className='headertext' to="/Contact">Contact</Link>
                  <Link className='headertext' to="/Event">Event</Link>
                  <Link  className='headertext' to="/Browsher" >View-Browsher</Link>
                  
                </Nav>
                <Outlet/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Navba