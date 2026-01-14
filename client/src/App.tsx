import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Navbar from './components/Navbar'

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;