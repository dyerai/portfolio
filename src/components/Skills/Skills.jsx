import { Container, Jumbotron, Col, Row } from 'react-bootstrap'
import java from './logos/JavaLogo.svg'
import python from './logos/Python-logo.svg'
import htmllogo from './logos/HTML5_logo.svg'
import jslogo from './logos/javascript-logo.svg'
import cplusplus from './logos/C++-logo.svg'
import csslogo from './logos/CSS3-logo.svg'
import flasklogo from './logos/flask-icon.svg'
import reactlogo from './logos/React-icon.svg'
import bootstraplogo from './logos/Bootstrap_logo.svg'
import './Skills.css'
import Logo from './Logo'

export default function Skills() {
    const LANGLOGOS = [
        {src:java, caption: "Java"},
        {src:python, caption: "Python"},
        {src:htmllogo, caption: "HTML"},
        {src:jslogo, caption: "JavaScript"},
        {src:cplusplus, caption: "C++"},
        {src:csslogo, caption: "CSS"}
    ];

    const FRAMELOGOS = [
        {src:flasklogo, caption: "Flask"},
        {src:reactlogo, caption: "React"},
        {src:bootstraplogo, caption: "Bootstrap"}
    ];

    const langLogoList = LANGLOGOS
    .map(logo => (
        <Col>
            <Logo src={logo.src} caption={logo.caption} />
        </Col>
    ));

    const frameLogoList = FRAMELOGOS
    .map(framework => (
        <Col>
            <Logo src={framework.src} caption={framework.caption} />
        </Col>
    ));
    
    return (
        // TODO: maybe add interactivity when hovering over logos
        <Jumbotron>
            <Container>
                <h1 className='skills-title'>Skills</h1>
                <h2 className='skills-subheading'>Languages</h2>
                <Row>
                    {langLogoList}
                </Row>
                
                <h2 className='skills-subheading'>Frameworks</h2>
                <Row>
                    {frameLogoList}
                </Row>
            </Container>
        </Jumbotron>
    )
}