import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Grid } from "@mui/material";
import { ninja6, ninja13, ninja1 } from "../assets/index";
import MailSubs from "../components/MailSubs";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <div className=" h-[80vh] items-center  flex ">
              <div>
                <h1 className="text-white font-bold md:text-[4rem] text-[3rem]">
                  Let’s <span className="text-secondary"> Play</span> Or <br />
                  Organise <span className="text-secondary"> Tournament</span>
                </h1>
                <Link to={"/tournament"}>
                  <button className=" mt-4 min-w-[100px] py-4 px-10 rounded-lg bg-[#F8102C] text-white font-bold ">
                    Get's Started
                  </button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img src={ninja6} alt="" className="mx-auto md:h-full h-[300px]" />
          </Grid>
        </Grid>

        {/* /// Mange Container Start */}
        <div className="md:h-[100vh] mt-10">
          <h1 className="text-white font-bold md:text-[4rem] sm:text-[3rem] text-[2.5rem]">
            Manage <span className="text-secondary"> Tournament</span>
          </h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="image md:col-span-6 col-span-12">
              <img
                src={ninja13}
                alt="image"
                className="md:h-[450px] h-[320px] mx-auto"
              />
            </div>
            <div className="title md:col-span-6 col-span-12 flex flex-col justify-center h-full  p-5 rounded-sm">
              <p className="text-para sm:text-[1.3rem] text-[1rem]">
                Manage all your tournaments in one place whatever their
                structures and matches formats. Decide how players participate
                in your tournaments. Showcase your tournament activities through
                a dedicated site or white-label platform. Connect your services
                with our API. Keep control over your data. Whether you run
                grassroot tournaments or professional circuits, Toornament makes
                it all possible.
              </p>

              <Link to={"/tournament"}>
                <button className=" mt-4 max-w-[300px] py-4 px-10 rounded-lg bg-[#F8102C] text-white font-bold ">
                  Get's Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* /// Mange Container End */}

        {/* /// Hacking Free Section Start */}
        <div className="md:h-[100vh] mt-10">
          <h1 className="text-white font-bold md:text-[4rem] sm:text-[3rem] text-[2.5rem]">
            <span className="text-secondary">Hacking</span> Free Competition
          </h1>
          <div className="grid grid-cols-12 gap-4 mt-5 ">
            <div className="image md:col-span-6 col-span-12 md:order-last">
              <img
                src={ninja1}
                alt="image"
                className="md:h-[450px] h-[320px] mx-auto"
              />
            </div>
            <div className="title md:col-span-6 col-span-12 flex flex-col justify-center h-full  p-5 rounded-sm">
              <p className="text-para sm:text-[1.3rem] text-[1rem]">
                Our platform prioritizes user security and fairness. Any form of
                hacking, cheating, or unauthorized software usage to gain an
                advantage is strictly prohibited. Advanced detection systems are
                in place to maintain a level playing field. Violations will lead
                to severe consequences, including immediate account suspension
                or permanent banning. Upholding trust and integrity within our
                community is paramount. We are committed to providing a positive
                and secure environment for all users and will take necessary
                actions to enforce these guidelines rigorously. Your cooperation
                ensures an enjoyable and equitable experience for everyone
                involved.
              </p>
              <Link to={"/tournament"}>
                <button className=" mt-4 max-w-[300px] py-4 px-10 rounded-lg bg-[#F8102C] text-white font-bold ">
                  Get's Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* /// Hacking Free Section End */}

        {/* ////////////// Subscription Start  //////////////////////// */}
        <MailSubs />
        {/* ////////////// Subscription End //////////////////////// */}

        {/* /////////////// Footer Start ////////////////////////// */}
        <Footer />
        {/* /////////////// Footer End ////////////////////////// */}
      </div>
    </>
  );
};

export default Home;
