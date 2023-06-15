import logo from './logo.svg';
import './App.css';
import Home from './componentes/home';
import Tx from './componentes/tx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
         <Router>
          <Routes>
            
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tx' element={<Tx/>} />

          </Routes>
         </Router>
        
      </header>
    </div>
  );
}

export default App;
