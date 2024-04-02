import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setErr(err);
        setLoading(false);
      });
  }, []);

  const cutStr = (str, num) => {
    return str.substr(0, num) + "...";
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-4 g-4">
        {products.map(pro => (
          <div className="col d-flex" key={pro.id}>
            <div className="card">
              <img
                src={pro.image}
                className="card-img-top object-fit-cover"
                alt={pro.title}
                style={{ width: "100%", height: "200px", position: "relative" }}
              />

              <div className="card-body">
                <h5 className="card-title text-truncate">{pro.title}</h5>
                <p>{pro.price} $</p>
                <p className="card-text">{cutStr(pro.description, 100)}</p>
                <NavLink to={`/product/${pro.id}`} className="btn btn-primary">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
