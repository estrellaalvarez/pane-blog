import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5001/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);

  return (
    <div>
      { blogs && blogs.map((blog, index) => (
        <Blog title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.user.name}/>
      ))}
    </div>
  )
}

export default Blogs