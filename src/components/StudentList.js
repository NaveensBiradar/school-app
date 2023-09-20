import React, { useEffect, useState } from 'react'

export default function StudentList() {
    const [users, setUsers] = useState([])
    const [student, setStudent] = useState([])


    const studentDetails = async (id) => {
      const response = await fetch(`http://127.0.0.1:3001/students/${id}`);
      let student = await response.json();
      console.log(student);
      if (!student) return "No post!"
      setStudent(student)

    }

    const studentDrop = (e) => {
      // console.log(e alert(e).value.target)
      console.log("ID",e)
      alert(e)
    }

    const getStudents = async ()=>{
          const response = await fetch("http://127.0.0.1:3001/students");
          let students = await response.json();
          console.log(students);
          if (!students) return "No result found"
          setUsers(students)
    }
    return (
      <div className="col-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Father</th>
              <th scope="col">Mother</th>
              <th scope="col">Address</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          {
            users.map((item) => (
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.father}</td>
                <td>{item.mother}</td>
                <td>{item.address}</td>
                <td>{item.contact_number}</td>
                <td>{item.blood_group}</td>
                <td>{item.dob}</td>
                <td>
                  <button className='btn btn-primary' onClick={()=>studentDetails(item.id)}>Select</button>
                </td>
                <td>
                <button className='btn btn-warning' onClick={()=>studentDrop(item.id)}>Drop</button>
                </td>
              </tr>
            </tbody>))
          }
        </table>
        <button onClick={getStudents}> Student List </button>
      </div>
    )
}
