import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantsList from '../../components/RestaurantsList';
import HeaderSearch from '../../components/HeaderSearch';

function SearchResults(){
  const { searchValue } = useParams();
  return(
    <div>
    <HeaderSearch />
    <RestaurantsList title="Restaurantes" search={searchValue} />
  </div>
  )
}

export default SearchResults;