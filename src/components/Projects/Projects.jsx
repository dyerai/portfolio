import { Container, Jumbotron, Row, Image, Col } from "react-bootstrap"
import './Projects.css'

export default function Projects() {


    return (
        <Jumbotron className='nomargin'>
            <Container>
                <h1 className='section-title'>Projects</h1>
                <div id='projectlist' hidden>
                    <h2 className='project-name'>What to Watch?</h2> 
                    <Row>     
                        <Col><Image src='https://via.placeholder.com/450x250?text=Placeholder+Image'  className='project-img' /></Col>
                        <Col><p className='project-desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></Col> 
                    </Row>
                    <h2 className='project-name'>Spotify Playlist Sorter</h2>
                    <Row>
                        <Col><Image src='https://via.placeholder.com/450x250?text=Placeholder+Image' className='project-img' /></Col>
                        <Col><p className='project-desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></Col>
                    </Row>
                </div>
                <h1 id='inprogress'>This section is currently under development, check back in the summer!</h1>
            </Container>
        </Jumbotron>
    );
}