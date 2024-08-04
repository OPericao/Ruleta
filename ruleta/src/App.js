import { Route, Routes } from 'react-router-dom';
import './App.css';
import Formulario from './Formulario';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/pericleta" element={< Formulario />} />
    </Routes>
  )
}

export default App;
