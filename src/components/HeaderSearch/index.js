import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import Image from '../../assets/backgroundSearch.png';
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

function HeaderSearch(){
  const classes = useStyles();

  return(
    <div className={classes.paperContainer}>
        <a href="/">
          <img style={{width: "5%", marginLeft: "10%", marginTop: '2%'}} src={Logo} alt="" />
        </a>
    </div>
  )
}

export default HeaderSearch;