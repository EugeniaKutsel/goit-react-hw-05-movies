import { NavLink } from "react-router-dom";
import styled from "styled-components";
import css from '../NavBar/NavBar.module.css';

const NavItem = styled(NavLink)`
color: #000;
text-decoration: none;

&.active {
  color: rgba(38, 92, 228, 0.784);
};

:hover:not(.active),
:focus-visible:not(.active){
  color: #000;
}
`

const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/movies'>Movies</NavItem>
    </nav>
  );
}

export default Navigation;