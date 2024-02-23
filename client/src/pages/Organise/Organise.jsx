import React, { useState, useEffect } from "react";
import { ninja5 } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../store/LoginSlice/LoginSlice";
import Navbar from "../../components/Navbar/Navbar";
import { organiseUser } from "../../store/OrganiseSlice/OrganiseSlice";

const Organise = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const organise = useSelector((state) => state.organise);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const OID = localStorage.getItem("OID");

  const formHandler = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/organise/login", data)
      .then((res) => {
        if (res.data.status === "success") {
          dispatch(organiseUser(true));
          console.log(res.data);
          localStorage.setItem("OID", res.data.result);
          navigate(`/organise/${OID}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/tournament", { params: { OID: OID } })
      .then((res) => {
        console.log(res.data.result);
        // localStorage.setItem('OID',res.data.result);
      });

    if (organise === true) {
      navigate(`/organise/${OID}`);
    }
  }, [login]);

  return (
    <>
      <Navbar />

      <div className="p-3 ">
        <h4 className="text-center md:text-[4rem] md:mt-0 mt-10 sm:text-[3rem] text-[2.8rem] font-bold text-white">
          Organiser Login
        </h4>
        <div className="flex justify-between md:max-w-[90%] mx-auto md:flex-row flex-col">
          <div className="items-center ">
            <form
              action=""
              onSubmit={formHandler}
              className="flex flex-col gap-5 text-white"
            >
              <input
                type="text"
                placeholder="Username"
                required
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
              />
              <button
                type="submit"
                className="bg-secondary p-4 rounded-sm mt-5"
              >
                Login
              </button>
              <p className="text-center text-white">OR</p>
              <Link
                to={"/organise/register"}
                type="submit"
                className="border-secondary text-center border-2 p-4 rounded-sm mt-5"
              >
                Register
              </Link>
            </form>
          </div>
          <div className="">
            <img src={ninja5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Organise;
