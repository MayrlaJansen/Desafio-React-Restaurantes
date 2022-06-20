import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import RestaurantDetails from './pages/RestaurantDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resultados/:searchValue" exact element={<SearchResults />} />
          <Route path="/detalhes/:id" exact element={<RestaurantDetails />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
