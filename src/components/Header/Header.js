import homeIcon from '../../assets/home-icon.png';

export const Header = () => {
  return (
    <header>
      <h1>NY Times Reader</h1>
      <img src={homeIcon} alt='home icon' className='home-icon' />
    </header>
  )
}