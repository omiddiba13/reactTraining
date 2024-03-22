import { useState } from "react";
import { Header } from "./assets/componets/headerNavBar";
import { Footer } from "./assets/componets/footer";
import { Card } from "./assets/componets/card";
import Icons from "./assets/componets/icons";
import { Massage } from "./assets/componets/massage";
import List from "./assets/s33/List";
import Test1 from "./assets/s33/test1";
import Test2 from "./assets/s33/Test2";
import Products from "./assets/buy/Products";
import { produce } from "immer";
import Form from "./assets/componets/forms/form";
import FormName from "./assets/componets/forms/form2";
import Form3 from "./assets/componets/forms/form3";

function App() {
  const [basket, setBasket] = useState([]);
  const addProduct = (id, productName, productPrice) => {
    const newBasket = produce(basket, (draft) => {
      if (draft.filter((items) => items.id === id).length > 0) {
        const targetIndex = draft.findIndex((item) => item.id === id);
        draft[targetIndex].productQuantity =
          draft[targetIndex].productQuantity + 1;
      } else {
        draft.push({ id, productName, productPrice, productQuantity: 1 });
      }
    });
    setBasket(newBasket);
  };

  const addQuantity = (q) => {
    return q < 10 ? q + 1 : q;
  };

  // const addQuantity = (q) => {
  //   return q < 10 ? q + 1 : q;
  // };
  const reduceQuantity = (q) => {
    return q > 1 ? q - 1 : q;
  };
  // const reduceQuantity = (q) => {
  //   return q > 1 ? q - 1 : q;
  // };

  // const handleAdd = (index) => {
  //   const newBasket = produce(basket, (draft) => {
  //     draft[index].productQuantity = addQuantity(draft[index].productQuantity);
  //   });

  //   setBasket(newBasket);
  // };

  const handleAdd = (index) => {
    const newBasket = produce(basket, (draft) => {
      draft[index].productQuantity = addQuantity(draft[index].productQuantity);
    });
    setBasket(newBasket);
  };

  // const handleReduce = (index) => {
  //   const newBasket = produce(basket, (draft) => {
  //     draft[index].productQuantity = reduceQuantity(draft[index].productQuantity);
  //   });
  //   setBasket(newBasket);
  // };

  const handleReduce = (index) => {
    const newBasket = produce(basket, (draft) => {
      draft[index].productQuantity = reduceQuantity(
        draft[index].productQuantity
      );
    });
    setBasket(newBasket);
  };

  // const handleDelete = (index) => {
  //   const newBasket = produce(basket, (draft) => {
  //     draft.splice(index, 1);
  //   });
  //   setBasket(newBasket);
  // };

  const handleDelete = (index) => {
    const newBasket = produce(basket, (draft) => {
      draft.splice(index, 1);
    });
    setBasket(newBasket);
  };

  return (
    <>
      <body className=" bg-light-subtle h-100 container-fluid">
        <Header
          basket={basket}
          handleAdd={handleAdd}
          handleReduce={handleReduce}
          handleDelete={handleDelete}
          total={basket.length}
        />

        <div className=" container-fluid col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-10 rounded my-5">
          {/* tests  */}
          {/* <div className="col-12">
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

            <div className='alert alert-warning mb-4'>
              <Test2 firstName='Ali' lastName='Alavi' />
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
      </div> */}

          <hr />
          <br />
          <Products addProduct={addProduct} />

          <hr />
          <Form />

          <hr />
          <FormName />
          <hr />
          <Form3 />

          <div className=" container ">
            <div className="row">
              <Footer />
              <hr />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
