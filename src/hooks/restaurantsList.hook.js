import { useState, useEffect } from 'react';
import api from '../api';

export function useRestaurants() {
  const [listRestaurants, setListRestaurants] = useState([])

  useEffect(() => {
    api
      .get('restaurants?page=1&limit=10')
      .then((response) => {
        setListRestaurants(response?.data.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return listRestaurants
}