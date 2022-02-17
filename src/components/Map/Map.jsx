import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';

function Map({ setCoordinates, setBounds, coordinates }) {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer} >
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyBFG97HYLGIl4UgVZr81YdNYMJt1qFU_CI'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={(e) => {
          console.log(e);
          setCoordinates({lat: e.center.lat, lng: e.enter.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
      >

      </GoogleMapReact>

    </div>
  )
}

export default Map