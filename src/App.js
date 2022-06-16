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
          <Route path="/search" exact element={<SearchResults />} />
          <Route path="/details" exact element={<RestaurantDetails />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
