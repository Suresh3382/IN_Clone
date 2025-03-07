import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../Services/baseUrl';
import { Avatar, Input } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { IUser } from '../../loginSignup/UserInterface';
import UserContext from '../../Context';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [SearchUserDetails, setSearchUserDetails] = useState<IUser>();
  const [searchUser, setsearchUser] = useState('');

  const { UserId, userJwtToken } = useContext<any>(UserContext);

  useEffect(() => {
    if (searchUser) {
      axios.get(`${baseURL}/api/User/SearchBar`, {
        params: searchUser ? { search: searchUser } : { search: '' },
        headers: { Authorization: `Bearer ${userJwtToken}` },
      }).then((response) => {
        const data = response.data;
        setUsers(data);
      }).catch((err) => {
        console.log(err, 'not found')
      })
    }
  }, [searchUser])

  const handleChange = (event: any) => {
    setsearchUser(event.target.value);
    console.log(searchUser);
  }

  const handleView = (user: IUser) => {
    setSearchUserDetails(user);
  }
  const handleFollow = (UserId: string, userId: string) => {

  }

  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <div className='w-25 mx-2'>
        <h4 className='my-2'>Search</h4>
        <Input placeholder="Search" variant="filled" onChange={handleChange} />
        {users.map((user: IUser, index) => (
          <div key={index} role="button" onClick={() => handleView(user)} className='d-flex align-items-center mt-2 gap-2'>
            <Avatar size={50} icon={<UserOutlined />} />
            <div>
              <p className='mb-0'>{user.userName}</p>
              <p className='mb-0' style={{ fontSize: '12px' }}>{user.fullName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 d-flex justify-content-center align-items-center'>
        <div className='d-flex  '>
          <div>
            <Avatar size={100} icon={<UserOutlined />} className='me-4' />
          </div>
          <div className='d-flex align-items-center'>
            <div>
              <div className='d-flex align-items-center gap-3'>
                <h2 className='mb-0'>{SearchUserDetails?.userName}</h2>
                <div className='d-flex gap-3'>
                  <button className='btn btn-primary' onClick={() => handleFollow(SearchUserDetails?.userId)}>
                    Follow
                  </button>
                  <button className='btn btn-light'>
                    Messages
                  </button>
                </div>
              </div>
              <div className='d-flex flex-column mt-3 gap-4'>
                <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                    <p>0  </p>
                    <p className='mb-0'>posts</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <p>{SearchUserDetails?.follower?.length == 0 ? "0" : SearchUserDetails?.follower?.length}</p>
                    <p className='mb-0'>followers</p>
                  </div>
                  <div className='d-flex gap-2'>
                    <p>{SearchUserDetails?.following?.length == 0 ? "0" : SearchUserDetails?.following?.length}</p>
                    <p className='mb-0'>following</p>
                  </div>
                  <div>
                    {/* <p>{SearchUserDetails.bio}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Search