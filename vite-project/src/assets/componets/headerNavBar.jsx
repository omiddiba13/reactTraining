import { CiShoppingBasket } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Forms } from "../componets/pages/Forms";
export function Header({
  basket,
  handleAdd,
  handleReduce,
  handleDelete,
  total,
}) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded sticky-top"
        data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shop
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/"} className="btn btn-dark nav-link ">
                  App
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Forms" className="btn btn-dark nav-link">
                  Forms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Tests" className="btn btn-dark nav-link">
                  Tests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Products1" className="btn btn-dark nav-link">
                  Products1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Products" className="btn btn-dark nav-link">
                  Products2
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-link btn-sm position-relative me-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop">
            <CiShoppingBasket size={28} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {total}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            List
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                <th scope="col">subTotal</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {basket.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td>
                    <div
                      className="btn-group d-flex w-75"
                      role="group"
                      aria-label="Basic example">
                      <button
                        type="button"
                        className="btn btn-success  flex-grow-0"
                        onClick={() => handleAdd(index)}>
                        +
                      </button>
                      <button
                        type="button"
                        className="btn btn-light flex-grow-1"
                        disabled>
                        {item.productQuantity}
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning  flex-grow-0"
                        onClick={() => handleReduce(index)}>
                        -
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger  flex-grow-0"
                        onClick={() => handleDelete(index)}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>

                  <td>{item.productQuantity * item.productPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
