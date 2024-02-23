import React from "react";
import { Phone } from "@mui/icons-material";
import {ninja14} from '../assets/index'
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-10 px-3">

      <div>
        <h5 className="text-white  font-bold text-[2.2rem] mb-6 ">
          About The Alpha Reg
        </h5>
        <p className="text-para text-[1.4rem] font-semibold">
          The Alpha Rig is a dynamic and rapidly growing startup dedicated to
          the world of PC gaming, technology, and esports organization. Founded
          in 2023, the company has quickly made a name for itself as a leading
          PC building, gaming, and esports authority. With a deep understanding
          of the latest hardware, software, and trends in the industry, we are
          committed to providing gamers with the best possible experience.
        </p>
      </div>
      <div>
        <h5 className="text-white  font-bold text-[1.6rem] mt-6 mb-3 ">
          Feel Free To Contact Us
        </h5>
        <div className="flex justify-between md:flex-row flex-col">
          <div>
            <span className="text-white text-[1.2rem] ">
              <Phone className="text-secondary " /> +91-91099 33942
            </span>
            <hr className="mt-5" />
            <span className="text-white text-[1.2rem] ">
              <Phone className="text-secondary " /> +91-91099 33942
            </span>
            <hr className="mt-5" />
          </div>
          <div className="">
              <img src={ninja14} alt="" className="h-[400px]" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
