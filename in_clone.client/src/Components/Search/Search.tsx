import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../Services/baseUrl';
import { Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Search = () => {
  const [users, setUsers] = useState();
  const [searchUser, setsearchUser] = useState('');
  const token = localStorage.getItem("JWTToken");

  useEffect(() => {
    axios.get(`${baseURL}/api/User/SearchBar`, {
      params: searchUser ? { searchUser } : '',
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      const data = response.data;
      setsearchUser(data);
    }).catch((err) => {
      console.log(err, 'not found')
    })
  }, [])

  const handleChange = (_event?: React.ChangeEvent<HTMLInputElement>, newValues?: string) => {
    setsearchUser(newValues || '');
    console.log(newValues)
  }

  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <div className='w-25'>
        <h4 className='mb-2'>Search</h4>
        <Input placeholder="Search" variant="filled" onChange={handleChange} />
        <div className='d-flex align-items-center mt-2 gap-2'>
          <Avatar size={50} icon={<UserOutlined />} />
          <div>
            <p className='mb-0'>Username</p>
            <p className='mb-0' style={{ fontSize: '12px' }}>Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search