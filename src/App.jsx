import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Us from './components/Us';
import Ue from './components/Ue';
import Ucb from './components/Ucb';
import Ucb2 from "./components/Ucb2";
import Ucb3 from "./components/Ucb3";
import Um from "./components/Um";
import Uc from "./components/Uc";

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/us" element={ <Us /> } />
        <Route path="/ue" element={ <Ue /> } />
        <Route path="/ucb" element={ <Ucb /> } />
        <Route path="/ucb2" element={ <Ucb2 /> } />
        <Route path="/ucb3" element={ <Ucb3 /> } />
        <Route path="/um" element={ <Um /> } />
        <Route path="/uc" element={ <Uc /> } />
      </Routes>
    </BrowserRouter>
  );
}
