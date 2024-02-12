import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { Input } from '../Input';
import DropHeader from './DropHeader';
import './Header.scss';
import Dropdown from './Dropdown';
import {Login} from '../Login/';

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [showDropHeader, setShowDropHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkHover = (shouldShow) => {
    setShowDropHeader(shouldShow);
  };

  ;

  const openModal = () => {
    setIsOpen(true);
  };

  const toggleLogin = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };
 

  return (
    <div>
    {/* I am passing this as props but the problem would be that children can't modify this isOpen state so we need callback function to perform this */}
    {isOpen && <Login isOpen = {isOpen} toggleLogin = {toggleLogin}/>}
      <nav className='navbar'>
        <div className='logo'>
          <a href="#"><img src="path/to/your/logo.png" alt="Logo" /></a>
        </div>

        <div className={`links ${showLinks ? 'show' : ''}`}>
          <a
            href="#"
            onMouseEnter={() => handleLinkHover(true)}
            onMouseLeave={() => handleLinkHover(false)}
          >
            Interview
          </a>
          <a
            href="#"
            onMouseEnter={() => handleLinkHover(true)}
            // onMouseLeave={() => handleLinkHover(false)}
          >
            Languages
          </a>
          <a href="#">Data Structure</a>
          <a href="#">Algorithm</a>
        </div>

        <div className='icons'>
          <div className='icon'>
            <Input className="searchbar" type="search" name="Search" />
          </div>
          <div className='icon'>
          {/* i want to open login model only when this is cliked */}
            <FaBeer className="fa" onClick={openModal}/> 
          </div>
          <div className='icon'>
            <FaBeer className='fa' />
          </div>
        </div>

        <div className='menu-icon' onClick={toggleLinks}>
          &#9776;
        </div>
      </nav>
      {showDropHeader && <DropHeader />}
      <Dropdown />
    </div>
  );
}
