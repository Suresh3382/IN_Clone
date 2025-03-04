import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../Services/baseUrl';

const Search = () => {
  const [users, setUsers] = useState();
  const token = localStorage.getItem("JWTToken");

  useEffect(() => {
    axios.get(`${baseURL}/api/User/GetAllUser`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      const data = response.data;
      setUsers(data)
    }).catch((err) => {
      console.log(err, 'not found')
    })
  },[])
  
  return (
    <div>Search</div>
  )
}

export default Search