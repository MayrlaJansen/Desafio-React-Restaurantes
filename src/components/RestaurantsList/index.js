import React, { useEffect, useState } from 'react';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRestaurants } from '../../hooks/restaurantsList.hook';
import Loading from '../Loading';

const useStyles = makeStyles({
  root:{
    maxWidth: '60%',
    marginLeft: '20%',
  },
  text:{
    fontFamily: 'Poppins', 
    fontSize: '24px', 
    marginBottom: '2%', 
    marginTop: '2%'
  },
  textStyle:{
    fontFamily: 'Poppins', 
    fontSize: '16px', 
    color: '#FFFFFF', 
    marginLeft: '2%',
  },
  // card:{
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // }
})

function RestaurantsList({title}){
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const restaurants = useRestaurants();
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout();
  }, []);

  return(
    <div className={classes.root}>
      <div className={classes.card}>
        <div>
          <Typography className={classes.text}>
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
     {loading ? <Loading /> :
        (<Grid container spacing={2} >
          {restaurants.map(( item, index) => (
            <Grid item xs={6} sm={6} md={6} key={index}>
             <a href={`/detalhes/${item.id}`}>
             <Card style={{ 
                backgroundImage: `url(${item.image})`, 
                height: '160px', 
                width: '100%',
                objectFit: 'contain',
                backgroundRepeat: "no-repeat", }} >
                  <Typography className={classes.textStyle}>
                    <strong>{item.name}</strong>
                  </Typography>
              </Card>
             </a>
            </Grid>
          ))}
        </Grid>) 
    }
     </div>
    </div>
  )
}

export default RestaurantsList;