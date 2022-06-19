import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles({
  text:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  button: {
    marginLeft: '40%',
    marginTop: '10%',
  },
})

function ButtonStyle(){
  const classes = useStyles();
  const navigate = useNavigate();
  return(
    <>
        <Button className={classes.button} startIcon={<ArrowBackIosIcon style={{color: 'white'}} />}  onClick={()=>{navigate('/')}} ><Typography className={classes.text}>Voltar</Typography>
        </Button>
    </>
  )
}

export default ButtonStyle;