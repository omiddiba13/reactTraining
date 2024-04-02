 import React, { useState } from 'react'
 
 export default function Test1(props) {
    const {firstN,Lname}=props
    const [fname,setFname]=useState(firstN);
    const [lname,setlname]= useState(Lname);




   return (
    <div className=" container mb-3">
            {fname}
            <button
            className='btn btn-danger  m-2'
            onClick={()=>{
                setFname("arash");

            }}
            > up </button>
            <div>
                
                {lname}
                <button className='btn btn-danger m-2'
                onClick={()=>{setlname("M")}}> up</button>
                 </div>
    </div>
   )
 }
 