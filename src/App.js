import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import DadosSelector from './pages/DadosSelector';
import Selector1 from './pages/Selector1';
import Selector2 from './pages/Selector2';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/pericleta" element={< Formulario />} />
      <Route path="/dadosSelector" element={< DadosSelector />} />
      <Route path="/dadosSelector/1" element={< Selector1 />} />
      <Route path="/dadosSelector/2" element={< Selector2 />} />
    </Routes>
  )
}

export default App;
