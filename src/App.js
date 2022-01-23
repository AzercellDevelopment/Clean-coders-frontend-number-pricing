import logo from "./logo.svg";
import "./App.css";
import { AdminPanel, BuyNumber, HomePage } from "./pages";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/buy/:id" element={<BuyNumber />} />
          <Route exact path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
