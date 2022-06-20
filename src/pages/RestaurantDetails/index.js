import React from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import HeaderDetails from '../../components/HeaderDetails';
import { useRestaurantDetails } from '../../hooks/restaurantDetails.hook';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  textTitle:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px'
  },
  textDescription:{
    fontFamily: 'Poppins',
    fontSize: '22px',
    lineHeight: '30px',
    color: '#676666',
    marginBottom: '20px'
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#808080',
    marginBottom: '20px'
  }
})

function RestaurantDetails({props}){
  const classes = useStyles();
  const { id } = useParams();
  const restaurantDetails = useRestaurantDetails({id});

  return(
    <>    
      <HeaderDetails 
        logo={restaurantDetails.image} 
        icon={restaurantDetails.logo}
        name={restaurantDetails.name}
        phone={restaurantDetails.telephone}
        website={restaurantDetails.website}
        />
      <Grid container className={classes.container}>
        <Grid item xs={10} md={5}>
          <Typography className={classes.textTitle}>Descrição</Typography>
          <Typography className={classes.textDescription}>{restaurantDetails.description}</Typography>
          <Typography className={classes.textTitle}>Faixa de preço</Typography>
          <Typography className={classes.textStyle}>{restaurantDetails.price_range}</Typography>
          <Divider />
          <Typography className={classes.textTitle} style={{marginTop: '20px'}}>Horários de funcionamento</Typography>
          <Typography className={classes.textStyle}>{restaurantDetails.opening_hours}</Typography>
          <Typography className={classes.textTitle}>Formas de pagamento</Typography>
          <Typography className={classes.textStyle}>{restaurantDetails.payment_methods}</Typography>
        </Grid>
      </Grid>
    </>

  )
}

export default RestaurantDetails;