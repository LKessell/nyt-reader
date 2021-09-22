import homeIcon from '../../assets/home-icon.png';
import menuIcon from '../../assets/menu.png';
import './Header.css';
import { NavBar } from '../NavBar/NavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDateString } from '../../utilities';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(window.innerWidth > 450);

  return (
    <>
      <header className='app-header'>
        <button className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
          <img src={menuIcon} alt='menu icon' className='menu-icon' />
        </button>
        <div>
        <h1>NY Times Reader</h1>
        <p>{getDateString()}</p>
        </div>
        <Link to='/'>
          <img src={homeIcon} alt='home icon' className='home-icon' />
        </Link>
      </header>
      <NavBar navOpen={navOpen}/>
    </>
  )
}