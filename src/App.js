import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DalleDemo } from './views/DalleDemo'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  
  
  return (
    <div className="App">
      <nav>
        <a href="/dalleII"></a>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/dalleII' replace/>}/>
        <Route path="/dalleII" element={<DalleDemo/>}/>
      </Routes>
      </div>
  )
}

export default App;
