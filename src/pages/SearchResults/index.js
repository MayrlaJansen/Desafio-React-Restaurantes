import React from 'react';
import Header from '../../components/Header';
import Logo from '../../assets/logo.jpg'
import RestaurantsList from '../../components/RestaurantsList';
import { SUBTITLE, TITLE } from '../../variables';
import { useParams } from 'react-router-dom';

function SearchResults(){
  const { searchValue } = useParams();
  return(
    <div>
    <Header logo={Logo} title={TITLE} subtitle={SUBTITLE} />
    <RestaurantsList title="Restaurantes" search={searchValue} />
  </div>
  )
}

export default SearchResults;