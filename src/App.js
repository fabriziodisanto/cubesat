
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Whole from './pages/whole';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Whole/>}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
