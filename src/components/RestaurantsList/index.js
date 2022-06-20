import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRestaurants } from '../../hooks/restaurantsList.hook';
import Loading from '../Loading';
import SearchBar from '../SearchBar';
import { theme } from '../../theme';

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
  card:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    }
  },
  textSimple:{
    fontFamily: 'Poppins', 
    fontSize: '14px',
  },
  buttonPlus:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%',
  }
})

function RestaurantsList({title, search}){
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10)

  const [restaurants, total] = useRestaurants(search, limit);

  console.log(restaurants)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout();
  }, []);

  return(
    <>
    <div>
      <SearchBar />
    </div>

    <div className={classes.root}>
      <Grid className={classes.card} container>
        <div>
          <Typography className={classes.text}>
            <strong>{title}</strong>
          </Typography>
        </div>
        {search &&  
          <Grid item > 
           <Grid xs={12} sm={12} md={12}>
           <Typography  className={classes.textSimple} style={{color: "#AAAAAA", textAlign: "end"}}>
              Resultados para
            </Typography>
           </Grid>
            <Grid xs={12} sm={12} md={12}>
            <Typography className={classes.textSimple} style={{fontWeight: "bold", textAlign: "end"}}>
              {search}
            </Typography>
            </Grid>
          </Grid>
        }
      </Grid>

      <div>
      {loading ? <Loading /> :
          (
          <>
         {restaurants.length ? (
          <>
          <Grid container spacing={2} >
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
          </Grid>
           <div className={classes.buttonPlus}>
           {total > limit && 
             <Button 
               onClick={() => {setLimit(total)}} 
               endIcon={<AddCircleOutlineIcon />} 
               style={{color:'#ED1C24'}}>Mostrar todos
             </Button> }
           </div>
           </>) :
           <Typography style={{color: '#808080',}}>Nenhum resultado encontrado</Typography>
            }
          </>
        ) 
      }
      </div>
    </div>
    </>
  )
}

export default RestaurantsList;