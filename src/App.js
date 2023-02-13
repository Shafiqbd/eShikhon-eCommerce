// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Shipping from "./components/Shipping/Shipping";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {/* <MainLayout /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
