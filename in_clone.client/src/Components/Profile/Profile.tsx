import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Services/baseUrl'
import Avatar from 'antd/es/avatar';
import { IUser } from '../../loginSignup/UserInterface';
import { SettingOutlined, ThunderboltOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs, TabsProps } from 'antd';

const Profile = () => {
  const [userData, setUserData] = useState<IUser>();
  const userId = localStorage.getItem("UserId");
  const token = localStorage.getItem("JWTToken");

  useEffect(() => {
    axios.get(`${baseURL}/api/User/GetUserbyId?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      const udata = res.data;
      setUserData(udata);
    })
  }, [])
  console.log(userData);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Post',
      children: 'No post yet',
      icon: <ThunderboltOutlined />,
    },
    {
      key: '2',
      label: 'Saved',
      children: 'No saved post yet',
      icon: <ThunderboltOutlined />,
    },
    {
      key: '3',
      label: 'Tagged',
      children: 'Comming Soon!',
      icon: <ThunderboltOutlined />,
    },
  ];

  return (
    <div className='container' style={{ fontFamily: 'Poppins' }}>
      <div className='mt-5 d-flex justify-content-center align-items-center'>
        <div className='d-flex  '>
      <div>
        <Avatar size={100} icon={<UserOutlined />} className='me-4' />
      </div>
          <div className='d-flex align-items-center'>
            <div>
              <div className='d-flex align-items-center gap-3'>
                <h2 className='mb-0'>{userData?.userName}</h2>
                <button type='button' className='btn btn-light'>Edit Profile</button>
                <SettingOutlined />
              </div>
              <div className='d-flex mt-3 gap-4'>
                <p className='mb-0'>posts</p>
                <p className='mb-0'>followers</p>
                <p className='mb-0'>following</p>
                <div>
                  {/* <p>{userData.bio}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <Tabs className='d-flex text-center' centered defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Profile  