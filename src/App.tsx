import React from 'react';
import './App.css';
import LoginPage from './component/LoginPage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Confirmation from './component/Confirmation';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />}/>
          <Route exact path='/confirmation' element={<Confirmation/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
