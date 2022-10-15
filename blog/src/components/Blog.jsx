import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card, Avatar, CardContent, CardMedia, Typography, CardHeader, IconButton, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { purple } from '@mui/material/colors'

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
    <div>
         <Card sx={{ width: '30%', height: '50vh', margin: 'auto', mt:5, padding: 4, borderRadius: '10px'}}>
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon /></IconButton>
              <IconButton onClick={handleDelete}><DeleteOutlineIcon /></IconButton>
            </Box>
          )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'pink' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt={description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> {"Written By"} { userName } </b> {"-"} {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default Blog