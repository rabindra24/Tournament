import * as React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
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
import { useParams } from "react-router-dom";
const drawerWidth = 240;

const CreateProject = (props) => {
  const { id } = useParams();
  const OID = localStorage.getItem("OID");
  const [project, setProjects] = useState("");
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tournament, setTournament] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/organise/create`, { name: project, OID : OID })
      .then((res) => {
        console.log(res.data.status)

        if (res.data.status === "success") {
          navigate("/organise/2");
          //Here I have to pass organisation id which will store at the time creating a organisation account
        }
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="">
      <Toolbar />
      <Divider />
      <List>
        {[{name :"Tournaments" , link : "/organise/tournaments"},{name :"Tournament Create" , link : "/organise/tournaments/create"},{name :"Projects" , link : "/organise/create"},{name :"Overviews" , link : `/organise/${OID}`},{name :"Home" , link : "http://localhost:5173/"}].map((text, index) => (
          <Link to={`${text.link}`} >
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
            Projects
          </Typography>
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
        <div className="grid sm:grid-cols-3 gap-5 p-5  w-full  ">
          <form action="" onSubmit={submitHandler} className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Project Name <br />
              <input
                type="text"
                name="name"
                id="name"
                className="w-full outline-none p-3 bg-lightbox my-1"
                placeholder="Project Name"
                value={project}
                onChange={(e) => setProjects(e.target.value)}
              />
            </label>
            <button type="submit" className="bg-green-500 text-white p-3">
              Create
            </button>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default CreateProject;
