import './App.css';
import profile from './images/profile.png'
import NavBar from './components/Navbar'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@100&display=swap');
      </style> 
      <NavBar />
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1 className="title">
          Aidan Dyer
        </h1>
        <div className="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Button size="lg">
          Resume
        </Button>
      </header>
    </div>
  );
}

export default App;
