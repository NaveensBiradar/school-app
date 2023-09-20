import React from 'react'

export default function Login() {
  return (
    <div className='container card'>
    <h3>Login</h3>
    <form className="row ">
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
    </div>
  )
}
