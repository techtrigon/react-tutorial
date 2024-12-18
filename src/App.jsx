import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Us from './components/Us';
import Uc from './components/Uc';
import Uc2 from "./components/Uc2";
import Uc3 from "./components/Uc3";
import Um from "./components/Um";


export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/us" element={ <Us /> } />
        <Route path="/uc" element={ <Uc /> } />
        <Route path="/uc2" element={ <Uc2 /> } />
        <Route path="/uc3" element={ <Uc3 /> } />
        <Route path="/um" element={ <Um /> } />
      </Routes>
    </BrowserRouter>
  );
}
