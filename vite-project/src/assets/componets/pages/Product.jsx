import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  // console.log(useParams());
  const { productID } = useParams();
  // console.log(productID);

  const [product, setProduct] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productID}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        setErr(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!product && <div className="alert alert-danger">No Product founded</div>}

      {product && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product?.image}
                className="img-fluid rounded-start"
                alt={product?.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {product?.category}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
