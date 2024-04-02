import { useState } from "react";
import { produce } from "immer";
import Icons from "./assets/componets/icons";
import { Link, Route, Routes } from "react-router-dom";

/////
import { Header } from "./assets/componets/headerNavBar";
import { Footer } from "./assets/componets/footer";
/// pages
import { Forms } from "./assets/componets/pages/Forms";
////
import Products1 from "./assets/componets/pages/Products1";
import { Products } from "./assets/componets/pages/Products2";
import { Product } from "./assets/componets/pages/Product";
/////// forms s
import Form from "./assets/componets/forms/form";
import FormName from "./assets/componets/forms/form2";
import Form3 from "./assets/componets/forms/form3";
import From4 from "./assets/componets/forms/form4";

/////// forms end
/// Tets s
import { Tests } from "./assets/componets/pages/Tests";

function App() {
  //// basket system start
  const [basket, setBasket] = useState([]);
  const addProduct = (id, productName, productPrice) => {
    const newBasket = produce(basket, draft => {
      if (draft.filter(items => items.id === id).length > 0) {
        const targetIndex = draft.findIndex(item => item.id === id);
        draft[targetIndex].productQuantity =
          draft[targetIndex].productQuantity + 1;
      } else {
        draft.push({ id, productName, productPrice, productQuantity: 1 });
      }
    });
    setBasket(newBasket);
  };

  const addQuantity = q => {
    return q < 10 ? q + 1 : q;
  };

  const reduceQuantity = q => {
    return q > 1 ? q - 1 : q;
  };

  const handleAdd = index => {
    const newBasket = produce(basket, draft => {
      draft[index].productQuantity = addQuantity(draft[index].productQuantity);
    });
    setBasket(newBasket);
  };

  const handleReduce = index => {
    const newBasket = produce(basket, draft => {
      draft[index].productQuantity = reduceQuantity(
        draft[index].productQuantity,
      );
    });
    setBasket(newBasket);
  };

  const handleDelete = index => {
    const newBasket = produce(basket, draft => {
      draft.splice(index, 1);
    });
    setBasket(newBasket);
  };
  /// //// basket system end

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
          <Routes>
            <Route path="/Forms" element={<Forms />} />
            <Route path="/Tests" element={<Tests />} />
            <Route
              path="/Products1"
              element={<Products1 addProduct={addProduct} />}
            />
            <Route path="/Products" element={<Products />} />
            <Route path="product/:productID" element={<Product />} />
          </Routes>
        </div>

        <hr />
        <br />
        <h1 className=" text-black text-center"> Hello</h1>
        <div className=" container ">
          <div className="row">
            <Footer />
            <hr />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
