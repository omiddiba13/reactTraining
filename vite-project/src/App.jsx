import { Header } from "./assets/componets/header"
import { Footer } from "./assets/componets/footer"
import { Card } from "./assets/componets/card"
import Icons from "./assets/componets/icons"
import { Massage } from "./assets/componets/massage"
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
               <Massage/>
               <Massage/>
               <Massage/>

               <div className=" container ">
                  <div className="row"> 
                    <Footer/>
                  
                  </div>
                   </div>
              </div>
          </div>
       </div>
       </body>    
 </>

  )
  

}

export default App
