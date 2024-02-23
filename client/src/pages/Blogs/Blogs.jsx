import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import { blog } from "../../assets";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const Blogs = () => {
  const [blogs, setBlog] = useState([
    {
      title: "blog",
      image: blog,
      para1: "Lorem ipsum dolor sit amet consectetur, adipisicing .",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/blog").then((res) => {
      setBlog(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
    <Navbar/>
      <div className="flex justify-center items-center flex-col pb-10">
        <Search />
        <div className="grid grid-cols-12 md:w-[80%] w-[90%] mx-auto gap-5 mt-10 text-white">
          {blogs.map((blog, idx) => (
            <div
              className="md:col-span-4 col-span-12 bg-[#2D2D2D] py-6 px-5 rounded-lg"
              key={idx}
            >
              <img
                src={blog.image}
                alt="Image"
                className="w-full h-[200px] mt-2 rounded-lg"
              />
              <h4 className="text-center font-bold mt-2 md:text-[1.5rem] text-[1.2rem]">
                {blog.title}
              </h4>
              <p className="text-white mb-8 mt-2">
                {blog.para1.slice(0, 70)}....
              </p>
              {/* <p className="text-white mb-8 mt-2">{blog.content}</p> */}
              {/* <Link to={"/blog/id"} className="bg-secondary p-3 rounded-lg">
              Read More....
            </Link> */}
              <Link to={`/blogs/${blog.BID}`}>
                <p className="bg-secondary p-3 text-center mx-auto rounded-lg">
                  Read More.....
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
