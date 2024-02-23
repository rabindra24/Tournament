import { ninja6 } from "../../assets";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../store/LoginSlice/LoginSlice";
import Navbar from "../../components/Navbar/Navbar";

const OrganiseRegister = () => {
  const [data, setData] = useState({
    username: "",
    discord : '',
    number : '',
    email : '',
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const login = useSelector((state) => state.login);

  const formHandler = async (e) => {
    e.preventDefault();

    console.log(data)
    await axios
      .post("http://localhost:3000/organise/register", data)
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem('OID',res.data.result.insertId)
          navigate("/organise/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // if (login === true) {
    //   navigate("/");
    // }
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-3">
        <h4 className="text-center md:text-[4rem] md:mt-0 mt-10 sm:text-[3rem] text-[2.8rem] font-bold text-white">
          Organise Register
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
                required
              />
              <input
                type="email"
                placeholder="email"
                value={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
              />
              <input
                type="text"
                placeholder="Discord Id"
                value={data.discord}
                onChange={(e) => setData({ ...data, discord: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Number"
                value={data.number}
                onChange={(e) => setData({ ...data, number: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="p-4 md:w-[400px] rounded bg-primary border-b-secondary border-b-2 outline-none"
                required

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
              className="mx-auto  md:h-[500px] h-[300px] mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganiseRegister;
