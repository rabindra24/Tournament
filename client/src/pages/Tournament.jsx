import React, { useEffect } from "react";
import { SportsEsports, MapsHomeWork } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";

const Tournament = () => {
  const navigate = useNavigate();

  const options = [
    {
      icon: (
        <SportsEsports sx={{ fontSize: "3.5rem" }} className="text-secondary" />
      ),
      title: "Play",
      link: "/play",
    },
    {
      icon: (
        <MapsHomeWork sx={{ fontSize: "3.5rem" }} className="text-secondary" />
      ),
      title: "Organise",
      link: "/organise",
    },
  ];

  const login = useSelector((state) => state.login);
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, [login]);

  return (
    <>
      <Navbar />

      <div className="flex min-h-[85vh] w-full items-center justify-center p-3 md:flex-row flex-col gap-5">
        {options.map((option) => (
          <Link
            to={option.link}
            className="text-center bg-[#2D2D2D] md:w-[300px] w-full py-10 rounded-lg"
          >
            {option.icon}
            <h5 className="text-white text-[2.5rem] font-bold">
              {option.title}
            </h5>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tournament;
