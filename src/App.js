import './App.css';
import { Routes, Route } from 'react-router-dom';
import HourlyMusic from './pages/HourlyMusic/HourlyMusic';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HourlyMusic />} />
      </Routes>
    </div>
  );
}

export default App;
