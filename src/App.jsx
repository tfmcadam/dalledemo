import './App.css';
import { Modal } from './modal/Modal';
import { useState } from 'react';
import { DalleDemo } from './views/DalleDemo'
import { ChatDemo } from './views/ChatDemo';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to="/dalleII">
            Dalle Demo
          </Link></li>
          <li><a href="/dalleII">Dalle Demo</a></li>
          <li><a href="/chat">Chat Demo</a></li>
          <li className="float-right">
            <button className="open-btn" onClick={() => setShow(true)}>Contact Me</button>
            <Modal onClose={() => setShow(false)} show={show}/></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dalleII" element={<DalleDemo/>} />
        <Route path='/chat' element={<ChatDemo/>} />
      </Routes>
    </div>
  )
}

export default App;
