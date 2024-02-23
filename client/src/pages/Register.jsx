import { ninja6 } from "../assets";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../store/LoginSlice/LoginSlice";
import Navbar from "../components/Navbar/Navbar";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const formHandler = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/register", data)
      .then((res) => {
        if (res.data.status === "success") {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (login === true) {
      navigate("/");
    }
  }, [login]);

  return (
    <>
      <Navbar />

      <div className="p-3">
        <h4 className="text-center md:text-[4rem] md:mt-0 mt-10 sm:text-[3rem] text-[2.8rem] font-bold text-white">
          Register
        </h4>
        <div className="flex justify-between md:max-w-[90%] mx-auto md:flex-row flex-col">
          <div className="items-center ">
            <form
              action=""
              className="flex flex-col gap-5 text-white"
              onSubmit={formHandler}
            >
              <input
                type="text"
                placeholder="Username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
              />
              <button
                type="submit"
                className="bg-secondary p-4 rounded-sm mt-5"
              >
                Register
              </button>
              <p className="text-center text-white">OR</p>
              <Link
                to={"/login"}
                type="submit"
                className="border-secondary text-center border-2 p-4 rounded-sm mt-5"
              >
                Login
              </Link>
            </form>
          </div>
          <div className="">
            <img
              src={ninja6}
              alt=""
              className="mx-auto md:h-full h-[300px] mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
