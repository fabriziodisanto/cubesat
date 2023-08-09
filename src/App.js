
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import AboutUs from './pages/aboutus';
import Contact from './pages/contacto';
import PanelesSolares from './pages/panelessolares';
import Whole from './pages/whole';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Navigate replace to ={'/nosotros'}/>}/>
          <Route exact path="/nosotros" element={<AboutUs />} />
          <Route exact path='/contacto' element={<Contact />}/>
          <Route exact path='/panelessolares' element={<PanelesSolares />}/>
          <Route exact path='/whole' element={<Whole/>}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
