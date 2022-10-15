import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card, Avatar, CardContent, CardMedia, Typography, CardHeader, IconButton, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Blog = ({title, description, imageURL, userName, isUser, id}) => {

  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`)
  }

  console.log(title, isUser)

  return (
    <div>
         <Card sx={{ width: '30%', height: '50vh', margin: 'auto', mt:5, padding: 4, borderRadius: '10px'}}>
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon /></IconButton>
              <IconButton onClick={handleEdit}><DeleteOutlineIcon /></IconButton>
            </Box>
          )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'pink' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> { userName } </b> {"-"} {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default Blog