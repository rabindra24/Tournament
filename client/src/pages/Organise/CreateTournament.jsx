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
import AddIcon from "@mui/icons-material/Add";
import { fifa } from "../../assets";
import Add from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const CreateTournament = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const OID = localStorage.getItem('OID');
  const {id} = useParams();


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(tournament);
    axios
    .post(`http://localhost:3000/tournament/create`, {...tournament,OID,PID : id})
    .then((res) => {
      if (res.data.status === "success") {
        navigate("/organise/tournaments");
      }
      else{
        console.log('ERROR')
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

  const [tournament, setTournament] = useState({
    name: "",
    game: 1,
    team: "",
    mode: "",
    startDate: "",
    endDate: "",
  });

  const [games , setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/games").then((res) => {
      console.log(res.data)
      setGames(res.data);
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
            Tournaments
          </Typography>
          <Link to={"/organise/tournaments/create"}>
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
        <div className="max-w-[500px] p-5  w-full  ">
          <form
            action=""
            onSubmit={submitHandler}
            className=" w-full flex flex-col"
          >
            <label htmlFor="name" className="text-white">
              Tournament Name <br />
              <input
                type="text"
                name="name"
                id="name"
                value={tournament.name}
                onChange={(e) =>
                  setTournament({ ...tournament, name: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                placeholder="Tournament Name"
                required
              />
            </label>
            <label htmlFor="name" className="text-white">
              Choose The Game <br />
              <select
                name="game"
                id="game"
                value={tournament.game}
                onChange={(e) =>
                  setTournament({ ...tournament, game: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                required
              >
              {games.map((game)=>(
                <option value={game.GID}>{game.G_name}</option>
              ))}
              </select>
            </label>
            <label htmlFor="name" className="text-white">
              Team / Players <br />
              <input
                type="number"
                name="name"
                id="name"
                value={tournament.team}
                onChange={(e) =>
                  setTournament({ ...tournament, team: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                placeholder="Team Size or Number of Players"
                required
              />
            </label>
            <label htmlFor="name" className="text-white">
              Mode <br />
              <select
                name="mode"
                id="mode"
                value={tournament.mode}
                onChange={(e) =>
                  setTournament({ ...tournament, mode: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                required
              >
                <option value="solo">Solo</option>
                <option value="team">Team</option>
              </select>
            </label>

            <label htmlFor="name" className="text-white">
              Start Date <br />
              <input
                type="date"
                name="start"
                id="start"
                value={tournament.startDate}
                onChange={(e) =>
                  setTournament({ ...tournament, startDate: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                placeholder="Tournament Name"
                required
              />
            </label>
            <label htmlFor="name" className="text-white">
              Till Date <br />
              <input
                type="date"
                name="end"
                id="end"
                value={tournament.endDate}
                onChange={(e) =>
                  setTournament({ ...tournament, endDate: e.target.value })
                }
                className="w-full outline-none p-3 bg-lightbox my-1"
                placeholder="Tournament Name"
                required
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

export default CreateTournament;
