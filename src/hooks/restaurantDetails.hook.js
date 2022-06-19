import { useState, useEffect } from 'react';
import api from '../api';

export function useRestaurantDetails({id}) {
  const [listRestaurantDetails, setListRestaurantDetails] = useState([])

  useEffect(() => {
    api
      .get(`restaurants/${id}`)
      .then((response) => {
        setListRestaurantDetails(response?.data.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [id])

  return listRestaurantDetails
}