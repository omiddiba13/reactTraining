import { BsFacebook, BsTwitter  }from "react-icons/bs";import { PiInstagramLogoDuotone } from "react-icons/pi";
export default function Icons(){
    return (
        <div className=" container nav my-2 fs-3 ">
        <a href="" className=" nav-link active"> <BsFacebook/> </a> 
        <a href="" className="nav-link"><BsTwitter/> </a>
        <a className='nav-link' href='#'>
        <PiInstagramLogoDuotone /> </a>
      </div>    )
}