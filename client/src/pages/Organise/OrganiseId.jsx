import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


const OrganiseId = () => {
  const data = [
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
    {
      id: 2,
      title: "Minecraft",
      genre: "Sandbox, Survival",
      url: "https://brightchamps.com/blog/wp-content/uploads/2022/06/HD-Minecraft-Wallpapers.jpg",
      platforms: [
        "PC",
        "PlayStation",
        "Xbox",
        "Nintendo Switch",
        "iOS",
        "Android",
      ],
      release_date: "2011-11-18",
      publisher: "Mojang Studios",
      developer: "Mojang Studios",
    },
    {
      id: 3,
      title: "Grand Theft Auto V",
      genre: "Action-adventure",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      platforms: ["PC", "PlayStation", "Xbox"],
      release_date: "2013-09-17",
      publisher: "Rockstar Games",
      developer: "Rockstar North",
    },
    {
      id: 4,
      title: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-adventure",
      url: "https://images.nintendolife.com/1abd2265ebb2c/the-legend-of-zelda-breath-of-the-wild-wallpaper.large.jpg",
      platforms: ["Nintendo Switch", "Wii U"],
      release_date: "2017-03-03",
      publisher: "Nintendo",
      developer: "Nintendo EPD",
    },
    {
      id: 5,
      title: "PlayerUnknown's Battlegrounds (PUBG)",
      genre: "Battle Royale",
      url: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/pubg_game_660_141020121948.jpg?size=1200:675",
      platforms: ["PC", "PlayStation", "Xbox", "Mobile"],
      release_date: "2017-12-20",
      publisher: "PUBG Corporation",
      developer: "PUBG Corporation",
    },
  ];

  const { id } = useParams();
  const response = data.filter((val) => val.id == id);
  const games = [
    {
      title: "GTA 5",
      date: "25/03/2023",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      active: true,
    },
    {
      title: "GTA 5",
      date: "25/03/2023",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      active: false,
    },
    {
      title: "GTA 5",
      date: "25/03/2023",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      active: true,
    },
    {
      title: "GTA 5",
      date: "25/03/2023",
      url: "https://wallpapercave.com/wp/wp1809647.jpg",
      active: true,
    },
  ];
  return (
    <div className="pb-5">
      
    </div>
  );
};

export default OrganiseId;
