import React from "react"
import "../Components/Style/App.css"
import HomePage from "./Page/Home/Homepage"
import Navbar from "./Page/Header"
import Footer from "./Page/Footer"
import Buildingpage from "./Page/Building/Buildingpage"
import ContactUs from "./Page/Contact/Contactpage";
import Aboutpage from "./Page/About/Aboutpage"
import Address from "./Page/Address/Address"
import Privacy from "./Page/Privacy/Privacy"
import Calculator from "./Page/Calculator/Calculator"
import Floor from "./Page/Floor/Floorpage"
import Filter from "./Page/Filter/Filterpage"
import House from "./Page/HouseInf/House"
import {Routes,Route} from "react-router-dom";
import NotFound from "./Page/NotFound/NotFound";

export default function App(){
  
  return(
      <div className = "container">
        <Navbar/>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path='/' element={<HomePage />}/>
            <Route path='/buildings' element={<Buildingpage/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/privacy-policy' element={<Privacy/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path ='/building/floor/:id' element = {<Floor/>}/>
            <Route path ="/filter" element ={<Filter/>}/>
            <Route path ="/building/floor/:id/:id" element={<House/>}/>

        </Routes>
        <Footer/>
      </div>
  )
}