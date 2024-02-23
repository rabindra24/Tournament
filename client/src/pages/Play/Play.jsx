import React, { useEffect } from "react";
// import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Play = () => {
  const [team, setTeam] = useState(0);
  const [data, setData] = useState([
    {
      GID: 1,
      G_name: "Fortnite",
      G_about: "Battle Royale",
      G_image:
        "https://assets.mspimages.in/gear/wp-content/uploads/2021/03/15br-bplaunch-egs-s3-2560x1440-2560x1440-687570387.jpg",
    },
  ]);
  // const [data,setData] = useState([
  //   {
  //     id: 1,
  //     title: "Fortnite",
  //     genre: "Battle Royale",
  //     url: "https://assets.mspimages.in/gear/wp-content/uploads/2021/03/15br-bplaunch-egs-s3-2560x1440-2560x1440-687570387.jpg",
  //     platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
  //     release_date: "2017-07-25",
  //     publisher: "Epic Games",
  //     developer: "Epic Games",
  //   },
  //   {
  //     id: 2,
  //     title: "Minecraft",
  //     genre: "Sandbox, Survival",
  //     url: "https://brightchamps.com/blog/wp-content/uploads/2022/06/HD-Minecraft-Wallpapers.jpg",
  //     platforms: [
  //       "PC",
  //       "PlayStation",
  //       "Xbox",
  //       "Nintendo Switch",
  //       "iOS",
  //       "Android",
  //     ],
  //     release_date: "2011-11-18",
  //     publisher: "Mojang Studios",
  //     developer: "Mojang Studios",
  //   },
  //   {
  //     id : 3,
  //     title: "Grand Theft Auto V",
  //     genre: "Action-adventure",
  //     url: "https://wallpapercave.com/wp/wp1809647.jpg",
  //     platforms: ["PC", "PlayStation", "Xbox"],
  //     release_date: "2013-09-17",
  //     publisher: "Rockstar Games",
  //     developer: "Rockstar North",
  //   },
  //   {
  //     id : 4,
  //     title: "The Legend of Zelda: Breath of the Wild",
  //     genre: "Action-adventure",
  //     url: "https://images.nintendolife.com/1abd2265ebb2c/the-legend-of-zelda-breath-of-the-wild-wallpaper.large.jpg",
  //     platforms: ["Nintendo Switch", "Wii U"],
  //     release_date: "2017-03-03",
  //     publisher: "Nintendo",
  //     developer: "Nintendo EPD",
  //   },
  //   {
  //     id: 5,
  //     title: "PlayerUnknown's Battlegrounds (PUBG)",
  //     genre: "Battle Royale",
  //     url: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/pubg_game_660_141020121948.jpg?size=1200:675",
  //     platforms: ["PC", "PlayStation", "Xbox", "Mobile"],
  //     release_date: "2017-12-20",
  //     publisher: "PUBG Corporation",
  //     developer: "PUBG Corporation",
  //   },
  // ]);

  useEffect(() => {
    axios.get("http://localhost:3000/games").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
        <Navbar/>

      <div className="flex justify-center items-center flex-col pb-10">
        {/* <Search /> */}
        <div className="grid grid-cols-12 md:w-[80%] w-[90%] mx-auto gap-5 mt-10 text-white">
          {data.map((game) => (
            <div className="md:col-span-4 col-span-12 bg-[#2D2D2D] py-6 px-5 rounded-lg">
              <img
                src={game.G_image}
                alt="There is a image"
                className="w-full h-[200px] mt-2 rounded-lg"
              />
              <h4 className="text-center font-bold md:text-[1.2rem] h-16 overflow-hidden mt-3 text-[1.4rem] mb-2">
                {game.G_name}
              </h4>
              <Link to={`/play/${game.GID}`}>
                <p className="bg-secondary p-3 text-center mx-auto rounded-lg">
                  Join Contest
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Play;
