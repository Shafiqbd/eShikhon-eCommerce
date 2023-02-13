// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Shipping from "./components/Shipping/Shipping";
import Login from "./components/User/Login";

function App() {
  return (
    <div>
      {/* <MainLayout /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
