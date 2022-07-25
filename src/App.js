import Home from "./pages/home/Home";
import About from "./pages/about/About";
import People from "./pages/people/People";
import Work from "./pages/work/Work";
import Photography from "./pages/photography/Photography";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>={" "}
          <Route path="/about" element={<About />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/photography" element={<Photography />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
