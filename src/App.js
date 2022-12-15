import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './component/Home';
import Nav from './component/Nav';
import Login from './component/Login';
import Register from './component/Register';

import WithNavigate from './component/Login';

function App() {
  
  return (
    <BrowserRouter>
    {/* <Withnavigate/> */}
    <div className="App">
      <Nav/>

      <div className='auth-wrapper'>
        <div className='auth-inner'>

        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<WithNavigate/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/*" element={<Register/>}/>

            
          </Routes>
         

          

          
          

        </div>

      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
