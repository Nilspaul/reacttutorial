import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Startseite</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/produkte" activeClassName="active" className="nav-link">Produkte</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/ueber-uns" activeClassName="active" className="nav-link">Über Uns</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/kontakt" activeClassName="active" className="nav-link">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
