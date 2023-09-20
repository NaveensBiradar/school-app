import React from 'react'

export default function StudentAdmit() {
  return (

    <div className='container card'>
        <h3>Student Ragistration</h3>
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="first_name" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Father Name</label>
                <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Mother Name</label>
                <input type="text" className="form-control" />
            </div>


            <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="text" className="form-control"  />
            </div>

            <div className="col-md-6">
                <label className="form-label">Address</label>
                <textarea type="text" className="form-control" style={{height:"50px"}} />
            </div>

            <div className="col-md-6">
                <select className="form-select col-md-6">
                    <option selected>Selecct Your Blood group</option>
                    <option value="1">A +</option>
                    <option value="2">B +</option>
                    <option value="3">AB +</option>
                    <option value="4">O +</option>
                    <option value="5">Non</option>
                </select>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}
