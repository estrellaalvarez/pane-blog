import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserBlogs = () => {

  const [blogs, setBlogs] = useState();

  const id = localStorage.getItem('userId');

  const sendRequest = async () => {
    const res= await axios.get(`http://localhost:5001/blog/user/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data
  }
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs))
  }, [])
  console.log(blogs);
  return (
    <div>UserBlogs</div>
  )
}

export default UserBlogs