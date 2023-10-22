import React, { useState } from "react";
import styles from "./login.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../../ui/Button/Button";
import { Form, useActionData, useNavigation } from "react-router-dom";
import axios from "axios";
function Login() {
  const {state} = useNavigation()
  const error = useActionData()
  return (
    <Form method="POST" className={`container ${styles.form}`}>
      <h2 className={`text-center ${styles.title}`}>Login</h2>
      <div className={`input-group ${styles.inputGroup}`}>
        <label htmlFor="email">
          <MdOutlineAlternateEmail />
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email.."
        />
      </div>
      <div className={`input-group ${styles.inputGroup}`}>
        <label htmlFor="password">
          <RiLockPasswordLine />
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your Password.."
        />
      </div>
      {error && <p className="alert alert-danger py-2 mb-0">{error}</p>}
      <Button to="/home" type="submit" moreClasses="mx-auto px-4 mt-2" disabled={state === "submitting"}> 
      {state === "submitting" ? "Logging...." : "login"}
      </Button>
    </Form>
  );
}


export async function action({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , data)
    console.log(res);
  } catch (err) {
    return(err?.response?.data?.message)
  }
  return null
}

export default Login;
