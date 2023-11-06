import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Newtask from "./NewTask/Newtask";
import Alltask from "./AllTask/Alltask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/newtask" element={<Newtask />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/alltask" element={<Alltask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
