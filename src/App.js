import './App.css';
import profile from './images/profile.png'
import NavBar from './components/Navbar/Navbar'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PDF from './Resume.pdf'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header" id='home'>
        <img src={profile} className="profile" alt="profile" />
        <h1 className="title">
          Aidan Dyer
        </h1>
        <div className="subheading">
          Aspiring software developer, passionate creator, and insightful thinker <br></br>
        </div>
        <style type="text/css">
        {`
          .btn-xxl {
            padding: 1rem 4rem;
            font-size: 1.5rem;
          }
        `}
        </style>
        <Button size='xxl' href={PDF} target='_blank'>
          Resume
        </Button>
      </header>
      <div id='about'>
        <About />
      </div>
      <div id='skills' className='remove-gutter'>
        <Skills />
      </div>
      <div id='projects' className='remove-gutter'>
        <Projects />
      </div>
      <div id='contact' className='remove-gutter'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
