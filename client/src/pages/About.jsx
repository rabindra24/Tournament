import React from "react";
import { about } from "../assets";
import Button from "../utils/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const About = () => {
  return (
    <>
    <Navbar/>

    <div className="">
      <div className="flex justify-between items-center min-h-[100vh] md:w-[90%] mx-auto sm:flex-row flex-col-reverse">
        <div className="md:w-[50%]">
          <img src={about} alt="" className="md:h-[500px]" />
        </div>
        <div className="md:w-[50%] p-2 sm:mt-0 mt-10">
          <p className="text-secondary font-bold mt-5">Who We Are</p>
          <h3 className="text-white font-bold sm:text-[3rem] text-[2.5rem]">The Alpha Rig </h3>
          <p className="sm:font-bold font-semibold text-para ">
            The Alpha Rig is a dynamic and rapidly growing startup dedicated to
            the world of PC gaming, technology, and esports organization.
            Founded in 2023, the company has quickly made a name for itself as a
            leading PC building, gaming, and esports authority. With a deep
            understanding of the latest hardware, software, and trends in the
            industry, we are committed to providing gamers with the best
            possible experience.
          </p>
          <p className="font-semibold text-para mt-2">
            The company's core focus is on building high-performance gaming PCs
            that are customized to meet the specific needs of each individual
            user. Whether it's a budget-friendly build or a top-of-the-line rig
            with all the bells and whistles, The Alpha Rig has the expertise to
            make it happen.
            <br />
            In addition to its PC building services, The Alpha Rig also offers a
            wide range of products and services for gamers, including
            peripherals, accessories, and software. The company is also actively
            involved in the esports community, sponsoring and organizing events,
            and supporting teams and players across a variety of games and
            genres.
            <br className="mb-2"/>
            With a rapidly growing community of loyal fans and customers, The Alpha Rig is quickly establishing itself as a leader in the world of PC gaming and technology. Whether you're a casual gamer or a serious esports competitor, The Alpha Rig has the expertise and resources to help you take your gaming to the next level.
          </p>
          <Button/>
        </div>
      </div>
      
      {/* /////////////// Footer Start ////////////////////////// */}
      <Footer/>
      {/* /////////////// Footer End ////////////////////////// */}
    </div>
    </>

  );
};

export default About;
