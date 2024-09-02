import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Formulario from './pages/Formulario';
import DiceSelector from './pages/DiceSelector';
import DiceSelector1 from './pages/DiceSelector1';
import DiceSelector2 from './pages/DiceSelector2';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/pericleta" element={< Formulario />} />
      <Route path="/diceSelector" element={< DiceSelector />} />
      <Route path="/diceSelector/1" element={< DiceSelector1 />} />
      <Route path="/diceSelector/2" element={< DiceSelector2 />} />
    </Routes>
  )
}

export default App;
