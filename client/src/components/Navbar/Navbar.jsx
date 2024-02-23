import React, { useState,useEffect } from "react";
import { logo } from "../../assets";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/LoginSlice/LoginSlice";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Navbar = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [toggle, setToggle] = useState(true);
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Blogs", link: "/blogs" },
    { title: "Tournament", link: "/tournament" },
  ];

  const handleLogout = () => {
    dispatch(loginUser(false));
    localStorage.removeItem('username')
    localStorage.removeItem('password')
  };

  useEffect(() => {
    if(localStorage.getItem('username')!== null){
      console.log('kdkfjkdjfk')
      dispatch(loginUser(true));
    }
  }, [login])
  

  return (
    <div className="mt-2 px-2">
      {/* Pc Navbar */}
      <div className="md:flex items-center justify-between hidden">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="md:h-[60px]" />
        </Link>
        <div className="flex justify-between">
          <ul className="flex text-white items-center">
            {links.map((link) => (
              <Link
                to={link.link}
                className="md:mr-4 hover:text-secondary cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        {!login ? (
          <Link
            to={"/login"}
            className=" min-w-[100px] text-center py-2 rounded-lg bg-[#FA0000] text-white font-bold "
          >
            Login
          </Link>
        ) : (
          <PowerSettingsNewIcon
            onClick={() => handleLogout()}
            sx={{ color: "#FA0000", fontSize: "2rem", cursor: "pointer" }}
          />
        )}
      </div>
      {/* Mobile Navbar */}
      <div className="flex justify-between md:hidden">
        {" "}
        <img src={logo} alt="logo" className="h-[30px]" />
        <span className="z-[1000]" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <Menu sx={{ color: "white", fontSize: "2rem" }} />
          ) : (
            <Close sx={{ color: "white", fontSize: "2rem" }} />
          )}
        </span>
        <div
          className={`flex absolute items-center left-0 top-10 w-full z-[100]  h-[90vh] bg-primary justify-center text-center flex-col ${
            toggle && "translate-y-[-800px]"
          } transition-all duration-500 `}
        >
          <ul className="flex text-white  flex-col">
            {links.map((link) => (
              <Link
                to={link.link}
                onClick={() => setToggle(!toggle)}
                className="mt-4 hover:text-secondary cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
            {!login ? (
              <Link
                to={"/login"}
                className=" mt-4 min-w-[100px] py-2 rounded-lg bg-[#FA0000] text-white font-bold "
              >
                Login
              </Link>
            ) : (
              <PowerSettingsNewIcon
                onClick={() => handleLogout()}
                sx={{ color: "#FA0000", fontSize: "2rem", cursor: "pointer", textAlign : 'center' , mt : '10px', mx : 'auto' }}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
