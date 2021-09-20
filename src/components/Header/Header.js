import homeIcon from '../../assets/home-icon.png';
import './Header.css';
import { getDateString } from '../../utilities';

export const Header = () => {
  return (
    <header className='app-header'>
      <div></div>
      <div>
      <h1>NY Times Reader</h1>
      <p>{getDateString()}</p>
      </div>
      <img src={homeIcon} alt='home icon' className='home-icon' />
    </header>
  )
}