import { useState, useEffect } from 'react';
import api from '../api';

export function useRestaurants(search="", limit) {
  const [listRestaurants, setListRestaurants] = useState([])
  const [total, setTotal] = useState(0);

  useEffect(() => {
      api
        .get(`restaurants?page=1&limit=${limit}&search=${search}`)
        .then((response) => {
          console.log(response)
          setListRestaurants(response?.data.data)
          setTotal(response?.data.pagination.total)
        })
        .catch((err) => {
          console.error('ops! ocorreu um erro' + err)
        })
  }, [search, limit])

  return [listRestaurants, total]
}