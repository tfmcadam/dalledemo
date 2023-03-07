import logo from './logo.svg';
import './App.css';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AiOptions';
import { useState } from 'react';
import { DalleDemo } from './views/DalleDemo'
import { ChatDemo } from './views/ChatDemo';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dalleII">Dalle Demo</a></li>
          <li><a href="/chat">Chat Demo</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dalleII" element={<DalleDemo />} />
        <Route path='/chat' element={<ChatDemo />} />
      </Routes>
    </div>
  )
}

export default App;
