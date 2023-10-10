import React from 'react'
import './NavBar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
    {/* this place in write navbar in project  */}
    <div className='navbar-wrape'>
      
    <Navbar expand="lg" className="bg-dark  ">
      <Container fluid>
        <Navbar.Brand href="#"><span style={{color:"white"}} className='ms-5 bran-name' >PORTFOLIO</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 me-4 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to={'/'} className='me-4 ' style={{color:"white",textDecoration:"none"}}><span className='list'>Home</span></Link></Nav.Link>
            <Nav.Link ><Link to={'/About'} className='me-4 ' style={{color:"white",textDecoration:"none"}}><span className='list'>AboutME</span></Link></Nav.Link>
            <Nav.Link ><Link to={'/Service'} className='me-4 ' style={{color:"white",textDecoration:"none"}}><span className='list'>Service</span></Link></Nav.Link>
            <Nav.Link ><Link to={'/Expertise'} className='me-4 ' style={{color:"white",textDecoration:"none"}}><span className='list'>Skills</span></Link></Nav.Link>
            <Nav.Link ><Link to={'/Contact'} className='me-4 ' style={{color:"white",textDecoration:"none"}}><span className='list'>Contact</span></Link></Nav.Link>
        
          
           
          </Nav>
         
          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
    </>
  )
}

export default NavBar