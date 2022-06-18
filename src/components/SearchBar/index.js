import React, { useState } from 'react';
import { IconButton, Input, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    marginTop: "2%",
    marginLeft: "25%",
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: "8px",
  },
})

function SearchBar(){
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

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
            onClick={()=>{}}
          >
            {<SearchIcon sx={{color: "#ED1C24"}} />}
          </IconButton>
        </InputAdornment>}
        />
    </div>
  )
}

export default SearchBar;