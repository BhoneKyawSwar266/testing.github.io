import React,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

function Navbar() {
  const[toggleMenu,SettoggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_Logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='gpt3__navbar-links_containers'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sing in</p>
        <button type='button'>Sing Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=>SettoggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={()=>SettoggleMenu(true)}/>  
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sing in</p>
                <button type='button'>Sing Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
