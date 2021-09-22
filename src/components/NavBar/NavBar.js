import './NavBar.css';
import { NavLink } from "react-router-dom";
import { headings } from "../../utilities";

export const NavBar = ({ navOpen }) => {
  const hidden = !navOpen ? {display: 'none'} : {display: 'block'};
  const links = Object.keys(headings).map(heading => {
    return (
      <li key={heading}>
        <NavLink to={`/${heading}`} id={heading} className='nav-link' activeClassName='selected'>
          {headings[heading]}
        </NavLink>
      </li>
    )
  });

  return (
    <nav style={hidden}>
      <ul>
        {links}
      </ul>
    </nav>
  )
}