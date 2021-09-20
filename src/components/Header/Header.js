import homeIcon from '../../assets/home-icon.png';
import './Header.css';

export const Header = () => {
  return (
    <header className='app-header'>
      <div></div>
      <h1>NY Times Reader</h1>
      <img src={homeIcon} alt='home icon' className='home-icon' />
    </header>
  )
}