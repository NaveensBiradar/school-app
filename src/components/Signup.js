import React, { useState } from 'react'

export default function Signup() {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        compassword:"",
        contactNumber:""
    })


    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setUser((prev)=>(
            {...prev, [name]:value }
        ))
        console.log(user)
    }

    const handleRegform = (e)=>{
        console.log(user)
        e.preventDefault()

        fetch('url',{
            Method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            Body:'body',
            Cache:'default'
        })
    }

  return (
    <div className='container card' onSubmit={handleRegform}>
        <h3>Sign up</h3>
        <form className="row g-3">

            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input onChange={handleInputChange} name='name' type="text" className="form-control" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input onChange={handleInputChange} name='email' type="email" className="form-control"  />
            </div>

            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input onChange={handleInputChange} name='password' type="password" className="form-control"  />
            </div>

            <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input onChange={handleInputChange} name='compassword' type="password" className="form-control"  />
            </div>

            <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input onChange={handleInputChange} name='contactNumber' type="text" className="form-control"  />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>

        </form>
    </div>
  )
}
