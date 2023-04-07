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