import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { auth } from "../Firebase";
import Feedback from "./Pages/Feedback";
import Footer from "./components/Footer";
import Computers from "./Pages/Computers";
import Tablets from "./Pages/Tablets";
import DronesCameras from "./Pages/DronesCameras";
import Mobiles from "./Pages/Mobiles";
import TVHomeCinema from "./Pages/TVHomeCinema";

function App() {
  const[user,SetUser]=useState()
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    SetUser(user)
  })
})
console.log(user)
  return (
    <Router>
      <Header></Header>
      <Routes>
           {/* <Route path="/" element={<SignIn></SignIn>}></Route> */}
           <Route path="/" element={user?<Navigate to='/welcome'></Navigate>:<Login></Login>}></Route>

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/computer" element={<Computers />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/drones" element={<DronesCameras />} />
        <Route path="/mobile" element={<Mobiles />} />
        <Route path="/tv" element={<TVHomeCinema />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/Co"></Navigate>}></Route> */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
