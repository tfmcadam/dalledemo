import './App.css';
import { NavBar } from './components/NavBar';
import { DalleDemo } from './views/DalleDemo'
import { ChatDemo } from './views/ChatDemo';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar/>
      

      <Routes>
        <Route path="/" element={<DalleDemo/>} />
        <Route path="/chat" element={<ChatDemo/>} />
        <Route path="*" element={<DalleDemo />} />
      </Routes>
    </div>
  )
}

export default App;
