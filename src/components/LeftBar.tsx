import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./Navbar";
import Stories from "./Stories";
import HomeFeeds from "./HomeFeeds";
import Grid from "@mui/material/Grid";
import SuggestForYou from "./SuggestForYou";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const drawerWidth = 240;
function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="gray" />
    </SvgIcon>
  );
}

export default function ClippedDrawer() {
  return (
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
        <Stories />
        <Grid container spacing={0}>
          <Grid item xs={8} md={8}>
            <HomeFeeds />
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            style={{
              position: "sticky",
              top: "30%",
              right: "0%",
            }}
          >
            <SuggestForYou />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
