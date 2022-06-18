import React from 'react';
import Header from '../../components/Header';
import Logo from '../../assets/logo.png'
import RestaurantsList from '../../components/RestaurantsList';

const TITLE = "Descubra novos sabores";
const SUBTITLE = "Aqui eu converso com você sobre nossa proposta";

function Home(){
  return(
    <div>
      <Header logo={Logo} title={TITLE} subtitle={SUBTITLE} />
      <RestaurantsList title="Restaurantes" />
    </div>
  )
}

export default Home;