import './NavBar.css';
import { NavLink } from "react-router-dom";
import { headings } from "../../utilities";

export const NavBar = () => {
  const links = Object.keys(headings).map(heading => {
    return (
      <NavLink to={`/${heading}`} key={heading} id={heading} className='nav-link' activeClassName='selected'>{headings[heading]}</NavLink>
    )
  });

  return (
    <nav>
      {links}
    </nav>
  )
}