import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { Input } from '../Input';
import DropHeader from './DropHeader';
import './Header.scss';
import Dropdown from './Dropdown';
import {Login} from '../Login/';
import { trie } from '../../Services/AutoSuggestion'; // trie is the root node which contain categories of the product in trie data structure

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [showDropHeader, setShowDropHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkHover = (shouldShow) => {
    setShowDropHeader(shouldShow);
  };

  

  const openModal = () => {
    setIsOpen(true);
  };

  const toggleLogin = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) =>{
    setSearchValue(e.target.value);
  }

  // I need to set the node in as data in redux store
  //I can use dispatch but the problem is why we need to dispatch it from here as this component should use root node to get the search result only
  //but since I have written dispatch code to .js file but how to run that file is the problem
 

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
            <Input className="searchbar" type="search" name="Search" onChange={handleSearch} value={searchValue} />
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
