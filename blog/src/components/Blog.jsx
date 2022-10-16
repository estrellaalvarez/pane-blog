import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CardContent, CardMedia, Typography, CardHeader, IconButton, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = ({title, description, imageURL, userName, isUser, id}) => {

  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`)
  };

  const deleteRequest = async() => {
    console.log('delete');
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };


  console.log(title, isUser)

  return (
    <div class="parent">
    <div className='blog-card'>
         <div>
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon /></IconButton>
              <IconButton onClick={handleDelete}><DeleteOutlineIcon /></IconButton>
            </Box>
          )}
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="220"
        image={imageURL}
        alt={description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> {"Written By"} { userName } </b> {"-"} {description}
        </Typography>
      </CardContent>
    </div>
    </div>
    </div>
  );
}

export default Blog