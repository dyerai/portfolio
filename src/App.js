import './App.css';
import profile from './images/profile.png'
import NavBar from './components/Navbar/Navbar'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PDF from './Resume.pdf'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header" id='home'>
        <img src={profile} className="App-logo" alt="logo" />
        <h1 className="title">
          Aidan Dyer
        </h1>
        <div className="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
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
    </div>
  );
}

export default App;
