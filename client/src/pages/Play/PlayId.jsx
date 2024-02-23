import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const PlayId = () => {
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

  var date = new Date();
  date.setHours(0, 0, 0, 0);

  const { id } = useParams();

  const [games, setGames] = useState([
    {
      O_name: "NO Tournament",
      O_end: "--",
      O_start: "--",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      active: false,
    },
  ]);

  const [participants, setParticipants] = useState([{ OID: 0 }]);
  var num = 0;

  const getOccurrence = (array, value) => {
    var count = 0;

    array.forEach((v) => v.OID === value && count++);

    return count;
  };
  
  const filterData = (action) => {
    console.log(games);
    axios
      .get(`http://localhost:3000/filtertour/`, {
        params: {
          id,
          action,
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          setGames(res.data.result);
        }
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/tournament/${id}`).then((res) => {
      if (res.data.status === "success") {
        console.log(res.data.result);
        setGames(res.data.result);
      }
    });
    axios.get(`http://localhost:3000/game/${id}`).then((res) => {
      setData(res.data);
    });

    axios.get(`http://localhost:3000/team`).then((res) => {
      setParticipants(res.data.result);
    });
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="pb-4">
        <div className="relative h-[200px] z-[0]">
          <img
            src={data[0].G_image}
            alt=""
            className="relative w-full  h-[200px] object-cover mt-5  mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute w-full h-full inset-0 flex items-center justify-center text-white font-bold md:text-[2.5rem] text-[1.2rem] ">
            {data[0].G_name}
          </div>
        </div>
        {/* <div className="flex justify-between w-[90%] mx-auto md:flex-row flex-col">
        <h4 className="text-white md:text-[2.4rem] text-[1.8rem] mt-10">
          Tournament of {response[0].title}
        </h4>
        <Search />
      </div> */}
        <div className="flex justify-center mt-5">
          <ButtonGroup variant="contained" aria-label="outlined  button group">
            <Button
              sx={{
                backgroundColor: "#F8102C",
                "&:hover": { backgroundColor: "red" },
              }}
              onClick={() => filterData("live")}
            >
              ALL
            </Button>
            <Button
              sx={{
                backgroundColor: "#F8102C",
                "&:hover": { backgroundColor: "red" },
              }}
              onClick={() => filterData("closed")}
            >
              Closed
            </Button>
            <Button
              sx={{
                backgroundColor: "#F8102C",
                "&:hover": { backgroundColor: "red" },
              }}
              onClick={() => filterData("upcomming")}
            >
              Upcomming
            </Button>
          </ButtonGroup>
        </div>
        {games.map((game, idx) => (
          <div
            className="md:w-[80%] w-[95%] mx-auto rounded-lg bg-[#2D2D2D] mt-5 p-3 flex justify-between items-center"
            key={idx}
          >
            <span className=" md:w-[300px] sm:w-[200px] w-[120px]">
              <h5 className="text-white md:text-[1.2rem] font-bold ">
                {game.T_name}
              </h5>
            </span>
            <span className="md:block hidden ">
              <p className="text-white md:text-[1rem] font-bold">
                Start : {new Date(game.T_start).getDate()}{" "}
                {new Date(game.T_end).toLocaleString("en-us", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-white md:text-[1rem] font-bold">
                End : {new Date(game.T_end).getDate()}{" "}
                {new Date(game.T_end).toLocaleString("en-us", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </span>
            <span className="w-[25%}">
              <p className="text-white md:text-[.6rem] font-bold">Teams</p>
              <p className="text-white md:text-[1rem] font-bold text-center">
                {getOccurrence(participants, game.OID)}
              </p>
              <hr />
              <p className="text-white md:text-[1rem] font-bold text-center">
                {game.Teams}
              </p>
            </span>


            {new Date(game.T_end) > date ? (
              <Link to={`/gameregister/${game.OID}`}>
                <p className="bg-green-500 text-white md:px-4 px-2 py-2 rounded-lg cursor-pointer">
                  Register
                </p>
              </Link>
            ) : (
              <p className="bg-secondary cursor-pointer text-white md:px-4 px-2 py-2 rounded-lg" >

                Closed
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayId;
