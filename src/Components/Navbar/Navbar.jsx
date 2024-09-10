/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Navbar.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className='navbar'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div> 
  )
};
export default Navbar;