import React from 'react'
import  Navba from './Navba'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
// import Corosel from "./Corosel"
import Contact from "./Contact"
import About from "./About"
import NonEvent from './NonEvent';
import Event from "./Event"
import Browsher from './Browsher'
import Front from './Front'
import Error from './Error'
import './App.css'
import Register from './Register';


// import { useEffect, useMemo, useState } from "react";

function App() {

  return (
    <div style={{overflow:"hidden"}}>
      <Navba/>
      <Routes>
      {/* <Route path="/Front" element={<Front/>}></Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Event" element={<Event/>}></Route>
        <Route path="/NonEvent" element={<NonEvent/>}></Route>
        <Route path="/Browsher" element={<Browsher/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path='/Registration' element={<Register/>}></Route>
      </Routes>              
    </div>
  )
}

export default App