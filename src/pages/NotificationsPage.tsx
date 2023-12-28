import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { useEffect } from "react";
import { getAllUsers, getUser, User } from "./../redux/slice/userSlice";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const drawerWidth = 240;

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="gray" />
    </SvgIcon>
  );
}

const Notifications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUser());
  }, [dispatch]);

  const data: User | undefined = useSelector(
    (state: RootState) => state.user.user
  );
  console.log(data);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Navbar />
        </AppBar>
        <Drawer
          className="custom-drawer"
          variant="permanent"
          sx={{
            display: { xs: "none", md: "flex" },
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: "#f8f7ff",
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#f8f7ff",
              border: "none",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <Link
                  to="/"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon
                        color="disabled"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </ListItemIcon>
                    Home
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to="/search"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon style={{ maxWidth: "25px" }}>
                      <SearchIcon style={{ width: "30px", height: "30px" }} />
                    </ListItemIcon>
                    Explore
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to="/direct"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    Direct
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to="/notifications"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsIcon
                        style={{ width: "30px", height: "30px" }}
                      />
                    </ListItemIcon>
                    Notifications
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  to="/create"
                  style={{
                    color: "gray",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircleOutlineIcon
                        style={{ width: "30px", height: "30px" }}
                      />
                    </ListItemIcon>
                    Creat
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ padding: "0px" }}
        >
          <Toolbar />
          <section className="notifications">
            <div
              className="notification-header"
              style={{ color: "#6f2dbd", fontWeight: "800" }}
            >
              Notifications
            </div>
            <div className="containerr">
              <div
                className="message-wrapper"
                style={{
                  color: "#6f2dbd",
                  fontWeight: "800",
                }}
              >
                Your notifications:
              </div>
              {data &&
                data?.notifications.map((item) => {
                  return (
                    <div className="message-wrapper" key={item.notId}>
                      {item.content}
                    </div>
                  );
                })}
            </div>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default Notifications;