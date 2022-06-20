import { useState, useEffect } from 'react';
import api from '../api';

export function useRestaurants(search, limit) {
  const [listRestaurants, setListRestaurants] = useState([])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!search){
      api
      .get(`restaurants?page=1&limit=${limit}`)
      .then((response) => {
        console.log(response)
        setListRestaurants(response?.data.data)
        setTotal(response?.data.pagination.total)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
    }else{
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
    }
  }, [search, limit])

  return [listRestaurants, total]
}