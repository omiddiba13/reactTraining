import { useState } from "react";
export default function FormName() {
  const [person, setPerson] = useState({ fullName: "", age: "" });

  const handelChange = (s) => {
    const Name = s.target.id;
    const value = s.target.value;
    setPerson({ ...person, [Name]: value });
    console.log(person);
  };

  return (
    <div className=" container  col-xxl-3 col-auto mt-3">
      <form className=" bg-light rounded">
        <div className="mb-3 m-3 justify-content-center align-content-center ">
          <label htmlFor="text" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby=""
            onChange={handelChange}
          />
          <hr />
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            aria-describedby=""
            onChange={handelChange}
          />

          <h4 className=" m-2">fullName : {person.fullName}</h4>
          <h4 className=" m-2">age: {person.age}</h4>
        </div>
      </form>
    </div>
  );
}
