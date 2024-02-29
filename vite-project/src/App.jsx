import { Header } from "./assets/componets/header"
import { Footer } from "./assets/componets/footer"
import { Card } from "./assets/componets/card"
import Icons from "./assets/componets/icons"
import { Massage } from "./assets/componets/massage";
import List from "./s33/List";
import Test1 from "./s33/test1";
import Test2 from "./s33/Test2";

function App() {

  return (
 <>
 <body className=" bg-danger vh-100 container-fluid"> 
  

     <Header/> 
     <Icons/>
     <div className=" container-fluid col-10 bg-info rounded my-5"> 
    
        <div className="row"> 
              <div className="col-12">
               <Card title='a' />
               <Card title='a' />
               <Card title='a' />
               <hr />
               <Massage/>
               <Massage/>
               <Massage/>
               <br /> 
               <hr /> 
                <div className=" container "><div
                className="row row-cols-4">
                 <div className="col">
                    
                   <List item={["e", "f", "g"]}/>
                 </div>
                 <div className="col">
                    
                    <List item={["e", "f", "g"]}/>
                  </div>
                  <div className="col">
                    
                    <List item={["e", "f", "g"]}/>
                  </div>
                  </div> 
                  </div>

                  <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='alert alert-info mb-4 m-3'>
              <Test1 firstN='Ali' Lname='Alavi' />
            </div>

            {/* <div className='alert alert-warning mb-4'>
              <Test2 firstName='Ali' lastName='Alavi' />
            </div> */}
          </div>
        </div>
      </div>

               <div className=" container ">
                  <div className="row"> 
                    <Footer/>
                  <hr />
                  </div>
                   </div>
              </div>
          </div>
          <div className='conatianer'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <Test2 />
          </div>
        </div>
      </div>


       </div>
       </body>    
 </>

  )
  

}

export default App
