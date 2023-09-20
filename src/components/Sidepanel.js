import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import StudentAdmit from './StudentAdmit'
import StudentList from './StudentList'

export default function Sidepanel() {
  return (

    <BrowserRouter>
       <ul className="">
            <li>
                <Link to="/list">Student List</Link>
            </li>
            <li>
                <Link to="/registration">Student Registration</Link>
            </li>
        </ul>
      <Routes>
        <Route path="/list" element = {<StudentList />}></Route>
        <Route path="/registration" element = {<StudentAdmit />}></Route>
      </Routes>
    </BrowserRouter>


    // <div class="d-grid gap-2">
    //     <button class="btn btn-primary">Student Admination</button>
    //     <button class="btn btn-primary">Check Student info</button>
    //     <button class="btn btn-primary">Student progress report</button>
    //     <button class="btn btn-primary">Staff list</button>
    //     <button class="btn btn-primary">Staff Attandance list</button>
    //     <button class="btn btn-primary">Staff Management</button>
    //     <button class="btn btn-primary">Result Section</button>
    //     <button class="btn btn-primary">Notifications</button>
    // </div>
  )
}
