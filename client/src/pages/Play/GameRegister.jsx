import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
const GameRegister = () => {
  const [playerOne, setPlayerOne] = useState({ name: "", discord: "" });
  const [playerTwo, setPlayerTwo] = useState({ name: "", discord: "" });
  const [playerThree, setPlayerThree] = useState({ name: "", discord: "" });
  const [playerFour, setPlayerFour] = useState({ name: "", discord: "" });

  const [data, setData] = useState([
    {
      id: 1,
      title: "Fortnite",
      genre: "Battle Royale",
      url: "https://assets.mspimages.in/gear/wp-content/uploads/2021/03/15br-bplaunch-egs-s3-2560x1440-2560x1440-687570387.jpg",
      platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      release_date: "2017-07-25",
      publisher: "Epic Games",
      developer: "Epic Games",
    },
  ]);

  const [submit, setSubmit] = useState(false);

  const { id } = useParams();
  const response = data.filter((val) => val.id == id);

  const UID = localStorage.getItem("id");

  const formHandler = async (e) => {
    e.preventDefault();
    const finalData = [
      playerFour,
      playerThree,
      playerOne,
      playerTwo,
      { UID: UID },
      { OID: id },
    ];

    console.log(finalData);
    await axios
      .post("http://localhost:3000/registration", finalData)
      .then((res) => {
        setSubmit(!submit);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/game/${id}`).then((res) => {
      // console.log(res.data[0].G_image);
      setData(res.data);
    });
  }, []);

  return (
    <>
    <Navbar/>

    <div className="md:w-[70%] w-[90%] mx-auto mt-10">
      <h4 className="text-white text-[2.3rem]  text-center font-bold my-3">
        Register For Tournament
      </h4>
      <form action="" onSubmit={formHandler}>
        <Accordion
          sx={{ backgroundColor: "#2D2D2D", color: "white", marginY: ".5rem" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Player 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <input
              type="text"
              name="username"
              id=""
              required
              value={playerOne.name}
              onChange={(e) => {
                setPlayerOne({
                  name: e.target.value,
                  discord: playerOne.discord,
                });
              }}
              // onChange={(e) => setPlayerOne({name : e.target.value, ...playerOne})}
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-black outline-none"
            />
            <input
              type="tel"
              name="discordid"
              id=""
              required
              value={playerOne.discord}
              onChange={(e) =>
                setPlayerOne({ discord: e.target.value, name: playerOne.name })
              }
              placeholder="Discord Id"
              className="w-full p-3 rounded-lg bg-black my-2 outline-none"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#2D2D2D", color: "white", marginY: ".5rem" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Player 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <input
              type="text"
              name="username"
              id=""
              required
              value={playerTwo.name}
              onChange={(e) =>
                setPlayerTwo({
                  name: e.target.value,
                  discord: playerTwo.discord,
                })
              }
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-black outline-none"
            />
            <input
              type="tel"
              name="username"
              id=""
              required
              value={playerTwo.discord}
              onChange={(e) =>
                setPlayerTwo({ discord: e.target.value, name: playerTwo.name })
              }
              placeholder="Discord Id"
              className="w-full p-3 rounded-lg bg-black my-2 outline-none"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#2D2D2D", color: "white", marginY: ".5rem" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Player 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <input
              type="text"
              name="username"
              id=""
              required
              value={playerThree.name}
              onChange={(e) =>
                setPlayerThree({
                  name: e.target.value,
                  discord: playerThree.discord,
                })
              }
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-black outline-none"
            />
            <input
              type="tel"
              name="discord"
              id=""
              required
              value={playerThree.discord}
              onChange={(e) =>
                setPlayerThree({
                  discord: e.target.value,
                  name: playerThree.name,
                })
              }
              placeholder="Discord Id"
              className="w-full p-3 rounded-lg bg-black my-2 outline-none"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#2D2D2D", color: "white", marginY: ".5rem" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Player 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <input
              type="text"
              name="username"
              id=""
              required
              value={playerFour.name}
              onChange={(e) =>
                setPlayerFour({
                  name: e.target.value,
                  discord: playerFour.discord,
                })
              }
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-black outline-none"
            />
            <input
              type="tel"
              name="username"
              id=""
              required
              value={playerFour.discord}
              onChange={(e) =>
                setPlayerFour({
                  discord: e.target.value,
                  name: playerFour.name,
                })
              }
              placeholder="Discord Id"
              className="w-full p-3 rounded-lg bg-black my-2 outline-none"
            />
          </AccordionDetails>
        </Accordion>
        <button
          type="submit"
          
          className="bg-secondary text-white py-3 px-5 rounded-sm"
        >
          Register
        </button>
      </form>
    </div>
    </>

  );
};

export default GameRegister;
