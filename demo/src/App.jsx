import "./App.css";
import About from "./componet/About";
import Home from "./componet/Home";
import Form from "./componet/Form";
import Signin from "./componet/Signin";
import Navbar from "./componet/Navbar";

import {BrowserRouter as Router, Routes,Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/"element={<Signin/>}></Route>
          <Route path="/navbar"element={<Navbar/>}></Route>
          <Route path="/about"element={<About/>}></Route>
          <Route path="/form"element={<Form/>}></Route>
          <Route path="/home"element={<Home/>}></Route>
         
        </Routes>
    </Router>
   
  );
}

export default App;
