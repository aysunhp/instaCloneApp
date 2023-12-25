import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./../assets/style/style.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ padding: "0px" }}>
        <Grid xs={5} style={{ padding: "0px" }}>
          <div className="container">
            <div className="logo">Logo</div>
            <h1 className="welcome">Welcome Back</h1>

            <div className="login-google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Log in with Google
            </div>
            <div className="divider">
              <div className="line"></div>
              <span>Or login with email</span>
              <div className="line"></div>
            </div>
            <input type="text" className="email" placeholder="Your Email" />
            <input
              type="text"
              className="password"
              placeholder="Your Password"
            />
            <div className="forgot-keep">
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="  keep-me-loged-btn"
                  id="keep-me-loged-btn"
                />
                <label htmlFor="keep-me-loged-btn">Keep me logged in</label>
              </div>
              <span className="forgotPass">Forgot password</span>
            </div>
            <div className="log-in">
              Log in
              <svg
                className="arrow-left"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="26"
                viewBox="0 0 512 512"
              >
                <path
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="line"></div>
            <p>
              Don't have an account yet?{" "}
              <span className="sign-up">Sign up</span>
            </p>
          </div>
        </Grid>
        <Grid xs={7} style={{ padding: "0px" }}>
          <div className="img-wrapper">
            <div className="img"></div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}