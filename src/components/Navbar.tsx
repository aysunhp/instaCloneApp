import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import {
  User,
  followUser,
  getAllUsers,
  getUser,
} from "../redux/slice/userSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<User[]>([]);
  const [disp, setDisp] = React.useState<string>("none");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    console.log("handleMobileMenuClose");
    console.log(mobileMoreAnchorEl);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
    console.log("handleMobileMenuOpen");
    console.log(mobileMoreAnchorEl);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ position: "absolute", top: "9.8%", left: "-1.7%" }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 0 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const user: User[] = useSelector((state: RootState) => state.user.user);
  React.useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUser());
  }, [dispatch]);

  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "#f4faff",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{ padding: "0px" }}
            >
              <MenuIcon
                style={{
                  color: "#5a189a",
                  padding: "0px",
                  width: "24px",
                  height: "24px",
                  marginRight: "5px",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
            style={{ color: "#5a189a", fontFamily: "Mulish" }}
          >
            DREAMY
          </Typography>
          <Search
            sx={{ display: { xs: "none", md: "block" } }}
            style={{ width: "70%", backgroundColor: "#ede6ff" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                if (e.target.value.trim() == "") {
                  axios.get(`http://localhost:5000/users`).then((res) => {
                    setData(res.data);
                  });
                } else {
                  axios
                    .get(
                      `http://localhost:5000/users/?userName=${e.target.value}`
                    )
                    .then((res) => {
                      setData(res.data);

                      setDisp("block");
                    });
                }
              }}
            />
            <Box>
              <div className="home-searched-user" style={{ display: disp }}>
                <div
                  className="top-open"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <span> Searced users:</span>
                  <div
                    className="block"
                    onClick={() => {
                      setDisp("none");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 384 512"
                    >
                      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>
                  </div>
                </div>
                {data &&
                  data.map((item) => {
                    return (
                      <div className="suggested-user" key={item.id}>
                        <div className="about-user">
                          <div className="user-img">
                            <img src={item.userImage} alt={item.name} />
                          </div>
                          <div className="userName-follower">
                            <div className="username">
                              {item.name} {item.surname}
                            </div>
                            <div className="follower-count">
                              {item.follower.length}
                            </div>
                          </div>
                        </div>
                        <div
                          className="follow-btn"
                          onClick={() => {
                            dispatch(followUser(item.id));
                          }}
                        >
                          Follow
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Box>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <Link to="/direct">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                style={{ padding: "0px" }}
              >
                <Badge badgeContent={0} color="error">
                  <MailIcon
                    style={{
                      color: "#5a189a",
                      padding: "0px",
                      width: "24px",
                      height: "24px",
                      marginRight: "5px",
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                style={{ padding: "0px" }}
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon
                    style={{
                      color: "#5a189a",
                      padding: "0px",
                      width: "24px",
                      height: "24px",
                      marginRight: "5px",
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>

            <Link to="/profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                style={{ padding: "0px" }}
              >
                <div
                  className="account-img-wrapper"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#5a189a",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <div
                    className="account-logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "93%",
                        height: " 93%",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                      src={user.userImage}
                      alt={user.userName}
                    />
                  </div>
                </div>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
