import Home from "./pages/home/Home";
import About from "./pages/about/About";
import People from "./pages/people/People";
import Work from "./pages/work/Work";
import Photography from "./pages/photography/Photography";
import Portfolio from "./pages/portfolio/Portfolio";
import Index from "./pages/index/Index";
import Caffeine from "./notes/caffeine";
import Hubferris from "./notes/hub-ferris";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<About />}></Route>={" "}
          <Route path="/about" element={<About />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/photography" element={<Photography />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/notes/caffeine" element={<Caffeine />}></Route>
          <Route path="/notes/hub-ferriss" element={<Hubferris />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
