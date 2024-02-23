import * as React from "react";
import CreateProject from "./CreateProject";
import { Link, Routes, Route, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Add from "@mui/icons-material/Add";

import { useState, useEffect } from "react";
const drawerWidth = 240;

const OrganiseTournament = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tournament, setTournament] = useState([]);
  const OID = localStorage.getItem("OID");

  const { id } = useParams();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="">
      <Toolbar />
      <Divider />
      <List>
        {[
          { name: "Tournaments", link: "/organise/tournaments" },
          { name: "Tournament Create", link: "/organise/tournaments/create" },
          { name: "Projects", link: "/organise/create" },
          { name: "Overviews", link: `/organise/${OID}` },
          { name: "Home", link: "http://localhost:5173/" },
        ].map((text, index) => (
          <Link to={`${text.link}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "whitesmoke" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "whitesmoke" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    axios
      .get("http://localhost:3000/organise/tournament", { params: { OID: OID, PID : id } })
      .then((res) => {
        setTournament(res.data.result);
        console.log(res.data.result);
      });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#181A1B",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Tournaments Create
          </Typography>
          <Link to={`/organise/tournaments/create/${id}`}>
            <button className="bg-green-500 p-3 rounded-sm sm:block hidden">
              <Add /> Tournament
            </button>
            <button className="bg-green-500 p-1 rounded-sm sm:hidden block ">
              <Add />
            </button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2D2D2D",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2D2D2D",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <div className=" gap-2">
          {tournament.map((tour) => (
            <Link to={`/organise/tournaments/${tour.TID}`}>
              <div className="bg-lightbox py-5 px-3 mb-1 flex justify-between">
                <h5 className="text-white ">{tour.T_name}</h5>
                <p className="text-white text-[0.8rem]">
                  {new Date(tour.T_start).getDate()}{" "}
                  {new Date(tour.T_start).toLocaleString("en-us", {
                    date: "numeric",
                    month: "short",
                  })}{" "}
                  / {new Date(tour.T_end).getDate()}{" "}
                  {new Date(tour.T_end).toLocaleString("en-us", {
                    date: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default OrganiseTournament;
