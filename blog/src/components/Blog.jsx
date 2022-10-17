import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CardMedia, IconButton, Box } from '@mui/material'
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
      <div className='title'> {title} </div>
      <CardMedia className='m'
        component="img"
        height="220"
        image={imageURL}
        alt={description}/>
        <div className='txt'>
          <div className='owner'> {"Posted By"} { userName } </div> <div className='desc'> {description} </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Blog