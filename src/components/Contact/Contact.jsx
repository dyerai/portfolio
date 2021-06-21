import { Jumbotron, Container } from 'react-bootstrap'

export default function Contact() {

    return (
        <Jumbotron className='nomargin'>
            <Container>
                <h1>Contact</h1>
                <p>Email: <a href='mailto:dyerai734@yahoo.com'>dyerai734@yahoo.com</a> Linkedin: <a href='https://www.linkedin.com/in/dyerai/' rel='noreferrer' target='_blank'>dyerai</a></p>
            </Container>
        </Jumbotron>
    );
}