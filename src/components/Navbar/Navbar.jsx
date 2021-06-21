import { Navbar, Nav, Button } from 'react-bootstrap'
import { scroller } from 'react-scroll'
import { Github, Linkedin } from 'react-bootstrap-icons'
import './Navbar.css'

export default function NavBar() {

    return (
        <Navbar collapseOnSelect className="navbar" bg="dark" variant="dark" fixed="top" expand='md'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Navbar.Brand
                    className='clickable'
                    onClick={() => scroller.scrollTo('home', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })}>Aidan Dyer </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link
                    onClick={() => scroller.scrollTo('about', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })}>
                    About
                </Nav.Link>

                <Nav.Link
                    onClick={() => scroller.scrollTo('skills', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })}>
                    Skills
                </Nav.Link>
                <Nav.Link
                    onClick={() => scroller.scrollTo('projects', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })}>
                    Projects
                </Nav.Link>
                <Nav.Link
                    onClick={() => scroller.scrollTo('contact', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                })}>
                    Contact
                </Nav.Link>
            </Nav>
           <Nav className="nav justify-content-end">
                <Button variant="link" href="https://github.com/dyerai" target="_blank">
                    <Github size={20} />
                </Button>
                <Button variant="link" href="https://www.linkedin.com/in/dyerai/" target="_blank">
                    <Linkedin size={20} />  
                </Button>
           </Nav>
           </Navbar.Collapse>
        </Navbar>
    );
}