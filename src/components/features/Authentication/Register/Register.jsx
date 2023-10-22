import React, { useState } from "react";
// import styles from "./register.module.css";
import Button from "../../../ui/Button/Button";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
// const initialState = {
//   name: "",
//   email: "",
//   phone: "",
//   password: "",
//   rePassword: "",
//   error: "",
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "changeName":
//       return { ...state, name: action.payload };
//     case "changeEmail":
//       return { ...state, email: action.payload };
//     case "changePhone":
//       return { ...state, phone: action.payload };
//     case "changePassword":
//       return { ...state, password: action.payload };
//     case "changeRepassword":
//       return { ...state, rePassword: action.payload };
//     case "setEroor":
//       return { ...state, error: action.payload };
//     case "reset":
//       return initialState;
//     default:
//       throw new Error("Unknown action type.");
//   }
// }

function Register() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState("");
  // console.log(state);

  const validationSchema = Yup.object().shape({
    name: Yup.string("Your name must be a string")
      .min(3, "Your name must be at least a 3 char ")
      .max(30, "Your name must be a exeed a 30 char")
      .required("Your name is required"),
    email: Yup.string("Your email must be a string")
      .email("Invalid Email")
      .required("Your email is required"),
    phone: Yup.string("Your Phone must be a string")
      .matches(/^(\+2)?0(10|11|12|15)[0-9]{8}$/, "Only Egyptian Phone Numbers")
      .required("Phone Number is required"),
    password: Yup.string("Your password must be a string")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character:"
      )
      .required("Password is required"),
    rePassword: Yup.string("Pssword Confirmation must be a string").oneOf(
      [Yup.ref("password")],
      "Password Dont't Match"
    ),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    onReset: handleReset,
  });
  function handleReset() {
    formik.setValues(initialValues);
    formik.setErrors(initialValues);
    formik.setTouched({
      name: false,
      email: false,
      phone: false,
      password: false,
      rePassword: false,
    });
    setError("")
  }

  async function handleSubmit(values) {
    console.log(values);
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      if (error.response.data?.errors?.msg) {
        setError(error.response.data.errors.msg);
      } else if (error?.response?.data) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  }

  return (
    <>
      <h2
        className="text-center mt-4"
        style={{ color: "var(--main-color)", fontSize: "2.2rem" }}
      >
        Register
      </h2>
      <form
        method="POST"
        onSubmit={formik.handleSubmit}
        className="container mt-4 d-flex gap-3 flex-column"
      >
        <div className="form-group">
          <label name="name" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className={`form-control ${
              formik.errors.name && formik.touched.name ? "is-invalid" : ""
            }`}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="invalid-feedback mb-0">{formik.errors.name}</p>
        </div>
        <div className="form-group">
          <label name="email" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${
              formik.errors.email && formik.touched.email ? "is-invalid" : ""
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="invalid-feedback mb-0"> {formik.errors.email}</p>
        </div>
        <div className="form-group">
          <label name="phone" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className={`form-control ${
              formik.errors.phone && formik.touched.phone ? "is-invalid" : ""
            }`}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p className="invalid-feedback mb-0"> {formik.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label name="password" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${
              formik.errors.password && formik.touched.password
                ? "is-invalid"
                : ""
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="invalid-feedback mb-0"> {formik.errors.password}</p>
        </div>
        <div className="form-group">
          <label name="rePassword" htmlFor="rePassword">
            Password Confirmation:
          </label>
          <input
            type="password"
            id="rePassword"
            className={`form-control ${
              formik.errors.rePassword && formik.touched.rePassword
                ? "is-invalid"
                : ""
            }`}
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="invalid-feedback mb-0"> {formik.errors.rePassword}</p>
        </div>
        {error && (
          <p className="alert alert-danger m-0 p-2 text-center">{error}</p>
        )}
        <div className="d-flex justify-content-center mt-2 gap-2 mx-auto">
          <Button
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            moreClasses=" px-4"
          />
          <Button moreClasses="px-4" type="reset" handleClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </>
  );
}

export default Register;
