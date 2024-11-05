import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {  GridCardProps } from '../types';



export default function GridCard({ name, email, city , id }: GridCardProps) {
  return (
    <Card sx={{ width: '350px', m: '30px 20px' }}>
      <CardActionArea href={`/users/${id}`}>
        <CardMedia
          component="img"
          sx={{ height: '300px' }}
          image="https://i.pinimg.com/474x/62/87/26/62872606328a29ace159c2e03926b4df.jpg"
          alt="user image"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography gutterBottom variant="h5" component="div" color={'primary'} sx={{ fontWeight: "600" }}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary', mr: 'auto', display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: "10px" }} color={'primary'} />{email}
          </Typography>
          <Typography variant="h6" sx={{ color: 'secondary', mr: 'auto', mt: '10px', display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ mr: "10px" }} color={'primary'} /> Lives in {city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={`/users/${id}`} variant="contained" endIcon={<SendIcon />} size="medium" color="primary" sx={{ m: '10px auto' }}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
