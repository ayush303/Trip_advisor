import React from 'react';
import {Box, Typography, CardMedia, CardContent, Chip, Card, Button, CardActions} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';
import LocationOn from '@material-ui/icons/LocationOn';

function PlaceDetails({ place }) {
  const classes = useStyles();
  
  return (
    <Card elevation={6} >
      <CardMedia 
        style={{height: 30}}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        tite={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" >
          <Typography variant="subTitle1">Price</Typography>
          <Typography gutterBottom variant="subTitle2">{place.price_level}</Typography>
        </Box> 
        <Box display="flex" justifyContent="space-between" >
          <Typography variant="subTitle1">Ranking</Typography>
          <Typography gutterBottom variant="subTitle2">{place.rating}</Typography>
        </Box> 
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center" >
            <img src={award.images.small} alt={award.dispaly_name} />
            <Typography variant="subTitle2" color="textSecondary">{award.dispaly_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({name}) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subTitle} >
            <LocationOn />{place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing} >
            <PhoneIcon />{place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => {
            window.open(place.web_url,'_blank')
          }}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => {
            window.open(place.website, '_blank')
          }}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails