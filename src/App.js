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
          <Route path="/weiqinghan.com" element={<Home/>}></Route>
          <Route path="/weiqinghan.com/projects" element={<Projects/>}></Route>
          <Route path="/weiqinghan.com/experience" element={<Experiences />}></Route>
          <Route path="/weiqinghan.com/eyes" element={<Eyes />}></Route>
          <Route path="/weiqinghan.com/memory" element={<Memory />}></Route>
          <Route path="/weiqinghan.com/displayproject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


