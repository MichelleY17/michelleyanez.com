import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import GetInTouch from "./components/pages/getInTouch/GetInTouch";

import Layout from "./components/menu/Layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Route>
    </Routes>
  );
}

export default App;
