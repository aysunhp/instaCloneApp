import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import { User } from "./../redux/slice/userSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const drawerWidth = 240;

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="gray" />
    </SvgIcon>
  );
}

const SearchPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        ></AppBar>
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
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <div className="search-section">
                <div className="search-header">
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                      if (e.target.value.trim() == "") {
                        axios.get(`http://localhost:5000/users`).then((res) => {
                          setUsers(res.data);
                        });
                      } else {
                        axios
                          .get(
                            `http://localhost:5000/users/?userName=${e.target.value}`
                          )
                          .then((res) => {
                            setUsers(res.data);
                            res.data;
                          });
                      }
                    }}
                  />
                </div>
                <div className="founded-users">
                  <span style={{ marginBottom: "20px" }}> Searced users:</span>
                  {users &&
                    users.map((item) => {
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
                          <div className="follow-btn">Follow</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
