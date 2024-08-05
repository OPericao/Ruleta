import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Formulario from './Formulario';
import DadosSelector from './DadosSelector';
import Dado1 from './Dado1';
import Dado2 from './Dado2';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/pericleta" element={< Formulario />} />
      <Route path="/dadosSelector" element={< DadosSelector />} />
      <Route path="/dadosSelector/1" element={< Dado1 />} />
      <Route path="/dadosSelector/2" element={< Dado2 />} />
    </Routes>
  )
}

export default App;
