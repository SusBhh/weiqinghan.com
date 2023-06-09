import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import Experiences from './components/Pages/Experiences';
import Eyes from './components/Pages/Eyes';
import Memory from './components/Pages/Memory';
import Footer from './components/Footer';
import DisplayProject from './components/Pages/DisplayProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experiences />}></Route>
          <Route path="/eyes" element={<Eyes />}></Route>
          <Route path="/memory" element={<Memory />}></Route>
          <Route path="/displayproject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


