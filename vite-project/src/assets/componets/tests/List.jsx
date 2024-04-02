import { useState } from "react";

export default  function List(props){

const {item}=props; 

    const [activeIndex, setActiveIndex]= useState(item.iength === 3?0:0)


    const handleUp=(i)=>setActiveIndex(i);
    console.log(activeIndex)

return(
    <ul className=" list-group">
        {item.map((item ,i)=> (
        <li className= {`list-group-item ${i === activeIndex && "active" }` } 
        key={i}
        onClick={() => {handleUp(i)}}>
            
            {item}
             </li>
       ))}

    </ul>
);
}