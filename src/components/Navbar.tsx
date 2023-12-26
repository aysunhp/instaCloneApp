// import React from "react";
// import "./../assets/style/style.scss";
// type Props = {};

// const Navbar = (props: Props) => {
//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="logo">Dreamy</div>
//           <input type="text" placeholder="Search..." />
//           <div className="icons">
//             <div className="svg-wrapper">
//               <svg
//                 className="icon-svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="25"
//                 width="25"
//                 viewBox="0 0 448 512"
//               >
//                 <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
//               </svg>
//             </div>
//             <div className="svg-wrapper">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="25"
//                 width="25"
//                 viewBox="0 0 512 512"
//               >
//                 <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
//               </svg>
//             </div>

//             <div className="profile-box"></div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="header">
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                // display: { xs: "none", md: "flex" },
                fontFamily: "Mulish",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "25px",
                color: "lightgray",
              }}
            >
              Dreamy
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip
                title="Open settings"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "lightgray",
                }}
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <svg
                    className="icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Open settings"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "lightgray",
                }}
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                      fill="white"
                    />
                    //{" "}
                  </svg>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div className="profile-box"></div>
                </IconButton>
              </Tooltip>
              {/* <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                style={{ color: "lightgray" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu> */}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="lightgray"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
