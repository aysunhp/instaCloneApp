import "react-app-polyfill/ie11";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./../assets/style/style.scss";

interface Values {
  name: string;
  surname: string;
  email: string;
  userName: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ padding: "0px" }}>
          <Grid xs={6} style={{ padding: "0px" }}>
            <div className="sign-up">
              <div
                className="container
            "
              >
                <div className="welcome">Welcome to Logo</div>
                <div className="divider">
                  <div className="line"></div>
                  <span>Register your account</span>
                  <div className="line"></div>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    userName: "",
                    password: "",
                  }}
                  onSubmit={(values: Values) => {
                    let id = uuidv4();
                    console.log({
                      ...values,
                      id,
                    });
                    let obj = {
                      ...values,
                      id,
                    };
                    axios
                      .post("http://localhost:5000/users", obj)
                      .then((res) => {
                        console.log(res);

                        if (res.status == 201) {
                          alert("This email exist");
                        }
                        if (res.status == 200) {
                          console.log("User registered succesfully");
                          navigate("/");
                        }
                      });
                  }}
                >
                  <Form>
                    <div className="input-wrapper">
                      <label htmlFor="name">First Name</label>
                      <Field id="name" name="name" placeholder="Enter Name" />
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="surname">Last Name</label>
                      <Field
                        id="surname"
                        name="surname"
                        placeholder="Enter Last Name"
                      />
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="email">Email</label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                      />
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="pass">Password</label>
                      <Field
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                      />
                    </div>

                    <div className="input-wrapper">
                      <label htmlFor="userName">Username</label>
                      <Field
                        id="userName"
                        name="userName"
                        placeholder="Enter Username"
                        type="text"
                      />
                    </div>

                    <button type="submit">Sign Up</button>
                  </Form>
                </Formik>
                <div className="line"></div>
                <p>
                  Do have an account?{" "}
                  <Link to="/login">
                    {" "}
                    <span className="sign-in">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </Grid>
          <Grid xs={6} style={{ padding: "0px" }}>
            <div className="img-wrapper">
              <div className="img"></div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Register;
