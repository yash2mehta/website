import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import useMediaQuery from "../hooks/useMediaQuery";
import "./navbar.css";

const { Header, Content, Footer } = Layout;


const items: MenuProps['items'] = [
    {
      label: <Link to='/home'>Home</Link>,
      key: 'home',
    },
    {
      label: 'About Us',
      key: 'aboutus',
      children: [
        {
          label: <Link to='/aboutus/mission_values'>Mission & Values</Link>,
          key: 'mission_values',
        },
        {
          label: <Link to='/aboutus/clubstructure'>Club Structure</Link>,
          key: 'clubstructure',
        },
        {
          label: <Link to='/aboutus/managementcommittee'>Management Committee</Link>,
          key: 'managementcommittee',
        },
        {
          label: <Link to='/aboutus/Club Advisors'>Club Advisors</Link>,
          key: 'clubadvisors',
        },
      ],
    },
    {
      label: <Link to='/events'>Events</Link>,
      key: 'events',
    },
    {
      label: 'News',
      key: 'news',
      children: [
        {
          label: <Link to='/news/blog'>Blog</Link>,
          key: 'allevents',
        },
        {
          label: <Link to='/news/specialfeatures'>Special Features</Link>,
          key: 'specialfeatures',
        },
      ],
    },
    {
      label: 'Research',
      key: 'research',
      children: [
        {
          label: <Link to='/research/researchreports'>Research Reports</Link>,
          key: 'researchreports',
        },
        {
          label: <Link to='/research/presentationmaterials'>Presentation Materials</Link>,
          key: 'presentationmaterials',
        },
      ],
    },
    {
      label: <Link to='/partners'>Partners</Link>,
      key: 'partners',
    },
    {
      label: <Link to='/contactus'>Contact Us</Link>,
      key: 'contactus',
    },
    {
      label: <Link to='/joinus'>Join Us</Link>,
      key: 'joinus',
    },
  ];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1240px)");
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const toggleOpen: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
      <Header>
        {isAboveMediumScreens ? (
                  <Menu className="navbar-menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        ) : (
            <div>
              <button onClick={toggleOpen}><MenuOutlined /></button>
              {hamburgerToggle ? (<h1></h1>) : (
                <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
                )}
            </div>
        )}
        </Header>

  );
};

export default Navbar;
