import React from 'react';
import { CircularProgress, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#808080',
    marginRight: '2%'
  },
  circularProgress: {
    color: '#ED1C24',
    width: '30px',
  }
})

function Loading(){
  const classes = useStyles();
  
  return(
    <div className={classes.root}>
      <Typography className={classes.textStyle}>Carregando</Typography>
      <CircularProgress className={classes.circularProgress} />
    </div>
  )
}

export default Loading;