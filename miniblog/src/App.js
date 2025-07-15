import "./App.css";
import { BrowserRouter, Router, Route, Routes, Navigate  } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
