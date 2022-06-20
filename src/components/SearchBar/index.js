import React, { useState } from 'react';
import {  IconButton, Input, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    marginTop: "-7%",
    marginLeft: "25%",
    marginBottom: "6%",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "80%",
      marginTop: "-20%",
      marginLeft: "10%",
      marginBottom: "15%",
    },
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: "8px",
  },
})

function SearchBar(){
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return(
    <div className={classes.root}>
      <Input 
        className={classes.searchBar} 
        id="search" 
        label="Encontre um restaurante" 
        variant="outlined" 
        value={searchValue}
        onChange={(event)=>{setSearchValue(event.target.value)}}
        fullWidth
        startAdornment={
        <InputAdornment position="start">
          <IconButton
            aria-label="toggle password visibility"
            onClick={()=>{navigate(`/resultados/${searchValue}`)}}
            disabled={searchValue === ''}
          >
            {<SearchIcon sx={{color: "#ED1C24"}} />}
          </IconButton>
        </InputAdornment>}
        />
    </div>
  )
}

export default SearchBar;