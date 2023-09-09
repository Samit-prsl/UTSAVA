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
import Services from './Pages/Services';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/gallery' Component={Gallery}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/venues' Component={Venues}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;



