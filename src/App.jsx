import './App.css';
import { Modal } from './modal/Modal';
import { useState } from 'react';
import { DalleDemo } from './views/DalleDemo'
import { ChatDemo } from './views/ChatDemo';
import { Navigate, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <nav className='topnav'>
        <ul>
          <li><Link to="/dalleII"> Dalle Demo</Link></li>
          <li><Link to="/chat">Chat Demo</Link></li>
          <li className="float-right">
            <button className="open-btn" onClick={() => setShow(true)}>Contact Me</button>
            <Modal onClose={() => setShow(false)} show={show}/></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/dalleII" element={<DalleDemo/>} />
        <Route path='/chat' element={<ChatDemo/>} />
      </Routes>
    </div>
  )
}

export default App;
