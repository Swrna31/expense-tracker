import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ResponsiveAppBar from "./components/ResponsiveAppBar"


const App = () => {
  return (
    <ResponsiveAppBar>
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
  </ResponsiveAppBar>
  );
};

export default App;
