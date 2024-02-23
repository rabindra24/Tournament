import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(
    {
      title: "Title",
      image:
        "https://firstsiteguide.com/wp-content/uploads/2021/06/game-errors-hp-1024x469.jpg",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit fuga ullam maiores sequi suscipit assumenda quidem earum nihil est.",
      para2: "",
    }
  );
  useEffect(() => {
    axios.get(`http://localhost:3000/blog/${id}`).then((res) => {
      //   setBlog(res.data[0]);
    //   console.log(res.data[0])
    //   console.log(blog[0])
      setBlog(res.data[0])
    });
  }, [id]);

  return (
    <>
    <Navbar/>

    <div>
      <h1 className="text-[4rem] text-white font-bold text-bold text-center">
        {blog.title}
      </h1>
      <img src={blog.image} alt="" className="md:w-[40%] mx-auto" />
      <p className="md:w-[80%] mx-auto mt-5 text-para font-bold md:text-[1.2rem] ">
        {blog.para1}
      </p>
      <p className="md:w-[80%] mx-auto mt-5 text-para font-bold text-[1.2rem] ">
        {blog.para2}
      </p>
    </div>
    </>

  );
};

export default SingleBlog;
