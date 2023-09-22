import * as React from 'react'
import './App.css';
import { BrowserRouter as Router,
Routes,
Route, 
} 
from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Venues from './Pages/Venues';
import Services from './Pages/Services'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;



