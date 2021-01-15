import { Navbar, Nav, Button } from 'react-bootstrap'
import { Github, Linkedin } from 'react-bootstrap-icons'
import './Navbar.css'

export default function NavBar(props) {

    return (
        <Navbar className="navbar" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Aidan Dyer</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
           <Nav className="nav justify-content-end">
                <Button variant="link" href="https://github.com/dyerai" >
                    <Github size={20} />
                </Button>
                <Button variant="link" href="https://www.linkedin.com/in/dyerai/">
                    <Linkedin size={20} />  
                </Button>
           </Nav>
        </Navbar>
    );
}