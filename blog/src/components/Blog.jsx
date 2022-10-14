import React from 'react'
import { Card, Avatar, CardContent, CardMedia, Typography, CardHeader } from '@mui/material'

const Blog = ({title, description, imageURL, userName}) => {

  return (
    <div>
         <Card sx={{ width: '30%', height: '50vh', margin: 'auto', mt:5, padding: 4, borderRadius: '10px'}}>
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