
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import AboutUs from './pages/aboutus';
import Contact from './pages/contacto';
import PanelesSolares from './pages/panelessolares';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/nosotros" element={<AboutUs />} />
          <Route exact path='/contacto' element={<Contact />}/>
          <Route exact path='/panelessolares' element={<PanelesSolares />}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
