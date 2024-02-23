import React from "react";
import { logo, legal } from "../../assets";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    { title: "Contact", link: "" },
    { title: "Term & Condition", link: "" },
    { title: "Cancellation, Refund", link: "" },
    { title: "Privacy Policy", link: "" },
  ];

  return (
    <div className="flex mt-10 flex-col justify-center items-center md:max-w-[90%] mx-auto">
      <div className="logo">
        <img src={logo} alt="" className="md:w-[400px]" />
      </div>
      <div className="links flex md:flex-row flex-col justify-evenly w-full  mt-10">
        <div className=" flex flex-col">
          {Links.map((item) => (
              <span className="text-white text-[1.1rem]  cursor-pointer hover:text-secondary mt-3">
                &gt; {item.title}
              </span>
          ))}
        </div>

        <div className="socialmedia md:mt-0 mt-10">
          <h6 className="text-white text-[1.4rem]">Social Links</h6>
          <div className="mt-5">
            <a href="">
              <Instagram
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  "&:hover": { color: "red" },
                }}
              />
            </a>
            <a href="">
              <Facebook
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  "&:hover": { color: "red" },
                }}
              />
            </a>
            <a href="">
              <LinkedIn
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  "&:hover": { color: "red" },
                }}
              />
            </a>
          </div>
        </div>
        <div className="legal ">
          <img src={legal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
