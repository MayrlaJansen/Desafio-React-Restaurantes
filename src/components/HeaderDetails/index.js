import React from 'react';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import ButtonStyle from '../ButtonStyle';

const useStyles = makeStyles({
  paperContainer: {
    backgroundRepeat: "no-repeat",
    minHeight:'200px',
    opacity: "0.9",
    backgroundSize: '100%',
  },
  text:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  button: {
    marginLeft: '40%',
    marginTop: '10%',
  },
  avatarStyle:{
    width: '110px',
    height: '120px',
    marginRight: '10%',
    marginLeft: '3%'
  },
  container:{
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
  },
  textStyle:{
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontSize: '14px',
    lineHeight: '20px'
  }
})

function HeaderDetails({logo, icon, name, phone, website}){
  const classes = useStyles();

  return(
    <div className={classes.paperContainer} style={{ backgroundImage: `url(${logo})`,}}>
     <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 1 }}>
        <Grid item xs={2} sm={4} md={4}>
          <ButtonStyle />
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={classes.container}>
          <Avatar alt="Icone" src={icon} className={classes.avatarStyle} />
          <div>
            <Typography className={classes.textStyle} style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '10px'}}>{name}</Typography>
            <Typography className={classes.textStyle}>{phone}</Typography>
            <Typography className={classes.textStyle}>{website}</Typography>
          </div>
        </Grid>
     </Grid>
    </div>
  )
}

export default HeaderDetails;