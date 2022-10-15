import React, { useState } from 'react';
import { Box, InputLabel, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const NewBlog = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '', description: '', imageURL: ''
  })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(data => console.log(data))
    .then(() => navigate("/blogs"));
  };

  return (
    <div>
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
    </div>
  )
}

export default NewBlog