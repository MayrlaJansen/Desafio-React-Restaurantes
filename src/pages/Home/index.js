import React from 'react';
import Header from '../../components/Header';
import Logo from '../../assets/logo.jpg'
import RestaurantsList from '../../components/RestaurantsList';
import { SUBTITLE, TITLE } from '../../variables';

function Home(){
  return(
    <div>
      <Header logo={Logo} title={TITLE} subtitle={SUBTITLE} />
      <RestaurantsList title="Restaurantes" />
    </div>
  )
}

export default Home;