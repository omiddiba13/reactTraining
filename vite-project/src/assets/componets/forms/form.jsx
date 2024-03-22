
import { useRef, useState } from 'react';
export default function Form() {
  const bgChange = useRef()
  const email = useRef();
  const password = useRef();
  const [person, setPerson] = useState({email:"" , password:""})
const handelSubmit = (e)=> { 
e.preventDefault();
console.log("submitted");
setPerson({ ... person,email:email.current.value ,password:password.current.value });

// console.log(bgChange.current.innerHTML)
};



  return (
        <div ref={bgChange} className=' container  col-xxl-3 col-auto mt-3'>
 <form className=' bg-light rounded' onSubmit={handelSubmit} >
  <div className="mb-3 m-3 justify-content-center align-content-center ">
    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>
    <div id="emailHelp" className="form-text" > <p   content=':-)'></p> </div>
  </div>
  <div className="mb-3 m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-check m-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={password}/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-danger m-3 " >Submit</button>
  <div className=' align-self-end container'>
   <p className='text-black text-center fs-5'> email:{person.email} </p>
   <p className='text-black text-center fs-5'>password:{person.password}</p>
</div>
</form>

  </div>
  
  )
}
