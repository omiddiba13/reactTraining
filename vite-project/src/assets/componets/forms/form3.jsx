import React from 'react'
import { useForm } from 'react-hook-form'


export default function Form3() {
    const {register , handleSubmit}  = useForm()
    ; 
    const couhandlesmb = (data) =>{ 
        console.log(data);
    }
  return (
    <>
            <div className=' container  col-xxl-3 col-auto mt-3'>
 <form className=' bg-light rounded'
 onSubmit={handleSubmit((data)=>{couhandlesmb(data)})
}
 >
  <div className="mb-3 m-3 justify-content-center align-content-center ">
    <label htmlFor="text" className="form-label" >Name</label>
    <input type="text" className="form-control" id="fullName"{...register("fullName")}/>
   <hr />
   <label htmlFor="age" className="form-label" >Age</label>
   <input type="number" className="form-control" id="age" {...register('age')}/>

   <button type="submit" className="btn btn-danger m-3 " >Submit</button>
  </div>
</form>

  </div>
    
    </>
  )
}
