import './App.css';
import { BrowserRouter as Router,
Routes,
Route, 
} 
from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
