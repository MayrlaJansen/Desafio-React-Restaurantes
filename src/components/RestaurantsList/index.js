import React from 'react';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRestaurants } from '../../hooks/restaurantsList.hook';

const useStyles = makeStyles({
  root:{
    maxWidth: '60%',
    marginLeft: '20%',
  },
  // card:{
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // }
})

function RestaurantsList({title}){
  const classes = useStyles();
  const restaurants = useRestaurants();

  console.log(restaurants);


  return(
    <div className={classes.root}>
      <div className={classes.card}>
        <div>
          <Typography  style={{fontFamily: 'Poppins', fontSize: '24px', marginBottom: '2%', marginTop: '2%'}}>
            <strong>{title}</strong>
          </Typography>
        </div>
        
        {/* <div> 
          <Typography  style={{fontFamily: 'Poppins', fontSize: '14px', color: "#AAAAAA"}}>
            Resultados para
          </Typography>
          <Typography style={{fontFamily: 'Poppins', fontSize: '14px'}}>
            ok
          </Typography>
        </div> */}
      </div>

      
     <div>
      <Grid container spacing={2} >
          {restaurants.map(( item, index) => (
            <Grid item xs={6} sm={6} md={6} key={index}>
             <a href="/">
             <Card style={{ 
                backgroundImage: `url(${item.image})`, 
                height: '160px', 
                width: '100%',
                objectFit: 'contain',
                backgroundRepeat: "no-repeat", }} >
                  <Typography style={{fontFamily: 'Poppins', fontSize: '16px', color: '#FFFFFF', marginLeft: '2%', }}>
                    <strong>{item.name}</strong>
                  </Typography>
              </Card>
             </a>
            </Grid>
          ))}
        </Grid>
     </div>
    </div>
  )
}

export default RestaurantsList;