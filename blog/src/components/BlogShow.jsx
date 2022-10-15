import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogShow = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5001/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, [id]);
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5001/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(blog);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myblogs/"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
        <Box display="flex"
        flexDirection={'column'}
        width={'50%'}
        margin={4}
        padding={2}
        >
          <Typography>
            <h2>Post A Blog</h2>
          </Typography>
          <InputLabel>Title</InputLabel>
          <TextField onChange={handleChange} value={inputs.title} margin="normal" name="title"/>
          <InputLabel>Description</InputLabel>
          <TextField onChange={handleChange} value={inputs.description} margin="normal" name="description" />
          <InputLabel>Image Link</InputLabel>
          <TextField onChange={handleChange} value={inputs.imageURL} margin="normal" name="imageURL" />
          <Button type='submit' >Submit Blog</Button>
        </Box>
        </form>
      )}
    </div>
  );
};

export default BlogShow