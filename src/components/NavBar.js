import {useEffect, useState} from 'react'
import {Navbar, Container } from 'react-bootstrap'

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home')
    const {scrolled, setScrolled} = useState(false)

    //React Hook useEffect για να παρακολουθήσει την κύλιση της σελίδας. Ουσιαστικά, αυτό σημαίνει ότι όταν ο χρήστης κυλάει τη σελίδα, ο κώδικας εκτελείται.
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            }else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"> <img src={''} alt=""/> </a>
                <a href="#"> <img src={''} alt=""/> </a>
                <a href="#"> <img src={''} alt=""/> </a>
            </div>
            <button className="vvd" onClick={ () => console.log('connect')}>Let's Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}