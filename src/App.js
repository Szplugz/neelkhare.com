import logo from "./logo.svg";
import Menu from "./Menu";
import Home from "./Home";
import Resume from "./Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Menu />
              </div>
            }
          ></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
