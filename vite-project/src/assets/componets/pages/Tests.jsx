import React from "react";
import Test1 from "../tests/test1";
import Test2 from "../tests/Test2";
import List from "../tests/List";
import { Massage } from "../tests/massage";
export const Tests = () => {
  return (
    <div className=" container-fluid col-xxl-12 col-xl-12 col-lg-10 col-md-10 col-sm-10 rounded my-5 bg-danger">
      <hr />
      <Massage />
      <Massage />
      <Massage />
      <br />
      <hr />
      <div className=" container ">
        <div className="row row-cols-4">
          <div className="col">
            <List item={["e", "f", "g"]} />
          </div>
          <div className="col">
            <List item={["e", "f", "g"]} />
          </div>
          <div className="col">
            <List item={["e", "f", "g"]} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info mb-4 m-3">
              <Test1 firstN="Ali" Lname="Alavi" />
            </div>

            <div className="alert alert-warning mb-4">
              <Test2 firstName="Ali" lastName="Alavi" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <Test2 />
          </div>
        </div>
      </div>
    </div>
  );
};
