import React from 'react'

export default function Form() {
const handelSubmit = (e)=> { 
e.preventDefault();
console.log("submitted")
};


  return (
        <div className=' container  col-xxl-3 col-auto mt-3'>
 <form className=' bg-light rounded' onSubmit={handelSubmit}>
  <div className="mb-3 m-3 justify-content-center align-content-center ">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" > <p content=':-)'></p> </div>
  </div>
  <div className="mb-3 m-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-check m-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-danger m-3 ">Submit</button>
</form>
  </div>
  
  )
}
