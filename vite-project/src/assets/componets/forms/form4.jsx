import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  // fullname: z.string().min(3),
  // age: z.number().min(18),

  fullname: z
    .string()
    .min(3, { message: "Fullname must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must be at least 18" }),
});
export default function From4() {
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors, isValid } = formState;
  const [person, setPerson] = useState({});
  const customHandleSubmit = data => {
    console.log(data);
    setPerson(data);
  };
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-4">
          {Object.keys(person).map(key => (
            <div key={key}>
              {key}:{person[key] === true ? "true" : person[key]}
            </div>
          ))}
        </div>
        <div className="w100"></div>
        <div className="container  col-xxl-3 col-auto mt-3">
          <form
            className=" bg-light rounded"
            onSubmit={handleSubmit(data => {
              customHandleSubmit(data);
            })}>
            <div className="row mb-3">
              <label htmlFor="fullname" className=" col-form-label">
                Fullname
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  {...register("fullname")}
                />
                {errors.fullname && (
                  <div className="text-danger">{errors.fullname.message}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="age" className=" col-form-label">
                Age
              </label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  {...register("age", { valueAsNumber: true })}
                />
                {errors.age && (
                  <div className="text-danger">{errors.age.message}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-2">Gender</div>

              <div className="col-sm-10">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    {...register("gender")}
                  />

                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    {...register("gender")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-10 offset-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    {...register("remember")}
                  />
                  <label className="form-check-label" htmlFor="remember">
                    remember me
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-danger"
              disabled={!isValid}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
