import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Services'
import Login from './Login'
import Signup from './Signup'
import Carosol from './Carosol';


export default function Headder() {
  return (
    <BrowserRouter>
       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"30px"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">School Management</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about"className="nav-link active" >About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active" >Contact</Link>
              </li>

              <li className="nav-item">
                <Link to="/services"className="nav-link active" >Services</Link>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
                <Link to="/signup" className="btn btn-outline-defaulte" >Signup</Link>
                <Link to="/login" className="btn btn-outline-defaulte" >Login</Link>
            </form>
          </div>
        </div>
      </nav>

      <div className="">
        <Carosol />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" elements = {<Contact />}></Route>
        <Route path="/services" elements = {<Service />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>


  )
}
