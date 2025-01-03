// import "./App.css";
import About from "./componet/About";
import Home from "./componet/Home";
import Form from "./componet/Form";
import Signin from "./componet/Signin";
import Navbar from "./componet/Navbar";
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom";
import State from "./componet/State";

function App() {
  return (
    // <Router>
    //   <Navbar/>
    //     <Routes>
    //       <Route path="/"element={<Home/>}></Route>
    //       <Route path="/about"element={<About/>}></Route>
    //       <Route path="/form"element={<Form/>}></Route>
    //       <Route path="/signin"element={<Signin/>}></Route>
    //     </Routes>
    // </Router>
    <div>
      <State/>
    </div>
  );
}

export default App;
