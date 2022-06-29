import Home from "./pages/home/Home";
import About from "./pages/about/About";
import People from "./pages/people/People";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>={" "}
          <Route path="/about" element={<About />}></Route>
          <Route path="/people" element={<People />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
