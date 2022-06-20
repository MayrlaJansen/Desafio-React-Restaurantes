import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Image from '../../assets/background.png';
import Logo from '../../assets/logo.jpg'

const useStyles = makeStyles({
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    minHeight:'250px',
    opacity: "0.9",
    backgroundSize: '100%',
  },
  header: {
    marginTop: '30px'
  }
})

function Header({title, subtitle}){
  const classes = useStyles();

  return(
    <div className={classes.paperContainer}>
       <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={1} sm={2}>
        <a href="/">
          <img style={{width: "30%", marginLeft: "10%"}} src={Logo} alt="" />
        </a>
      </Grid>
      <Grid item xs={10} sm={4} className={classes.header}>
        <Typography style={{fontFamily: 'Poppins', fontSize: '24px'}}>
         <strong>{title}</strong>
        </Typography>
        <Typography style={{fontFamily: 'Poppins', fontSize: '18px', color: '#676666'}}>
         {subtitle}
        </Typography>
      </Grid>
    </Grid>
    </div>
  )
}

export default Header;