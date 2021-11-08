import './About.css'
import { Jumbotron, Container } from 'react-bootstrap'

export default function About() {
    return (
        <Jumbotron fluid className='nomargin'>
            <Container>
                <h1 className='section-title'>About</h1>
                <div className='about-description'>
                    <p>Hello! My name is Aidan Dyer and I'm a current Sophomore at the University of Wisconsin - Madison studying Computer Science and Data Science.</p>
                    <p>My passion lies in creating applications to solve old problems in new ways. My interests in programming include data programming, full-stack development, and mobile app development. I'm always passionate about learning new things and perfecting my craft. If I have time to spare, you'll often see me learning a new development tool that I find interesting.</p>
                    <p>When I'm not programming, I enjoy listening to music, playing guitar, binge watching early 2000's films, and reading.</p>
                </div>
            </Container>
        </Jumbotron>
    );
}