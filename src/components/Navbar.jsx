import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { Typography, Toolbar } from '@material-ui/core'
import Rotate from 'react-reveal/Rotate';

import logo from '../assets/images/redblazer.png'
import comingsoon from '../assets/images/comingsoon.png'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location

  const [navbar, setNavbar] = useState('appbar')
  const [scrolling, setScrolling] = useState('##FAFAFA')

  const changeNavbar = () => {
    if(window.scrollY >= 1) {
      setNavbar('navbar')
      setScrolling('#FAFAFA4B')
    } else {
      setNavbar('appbar')
      setScrolling('#FAFAFA')
    }
  }

  useEffect(() => {
    changeNavbar()
    window.addEventListener('scroll', changeNavbar)
  }, [])
  
  return (
    <>
      <Toolbar className={navbar}>
        <Typography component={Link} to='/' variant='h6' color='inherit'>
            <img src={logo} alt="Red Blazer" className='logo' />
        </Typography>

        <Menu mode='horizontal' selectedKeys={[pathname]} style={{backgroundColor: scrolling}}>
          <Menu.Item key='/'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='/services'>
            <Link to='/services'>Services</Link>
          </Menu.Item>
          <Menu.Item key='/shop' className='navbar-comingsoon'>
            <Rotate top left delay={750}>
              <img src={comingsoon} alt="Coming Soon" className='navbar-comingsoon-mark'/>
            </Rotate>
            <Link to='/shop'>Shop</Link>
          </Menu.Item>
          <Menu.Item key='/aboutus'>
            <Link to='/aboutus'>About Us</Link>
          </Menu.Item>
          <Menu.Item key='/contactus'>
            <Link to='/contactus'>Contact Us</Link>
          </Menu.Item>
        </Menu>

        <Link to='/services' className='action-button'>
          <Typography>Join Us</Typography>
        </Link>
      </Toolbar>
    </>
  )
}

export default Navbar