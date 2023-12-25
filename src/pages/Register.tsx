import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}

const Register = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          userName: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Enter Name" />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Enter Last Name" />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
          />
          <br />
          <label htmlFor="pass">Email</label>
          <Field
            id="password"
            name="password"
            placeholder="Enter Password"
            type="password"
          />
          <br />
          <label htmlFor="userName">Username</label>
          <Field
            id="userName"
            name="userName"
            placeholder="Enter Username"
            type="text"
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
