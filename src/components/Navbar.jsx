
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Startseite</a>
          </li>
          <li className="nav-item">
            <a href="/produkte" className="nav-link">Produkte</a>
          </li>
          <li className="nav-item">
            <a href="/über-uns" className="nav-link">Über uns</a>
          </li>
          <li className="nav-item">
            <a href="/kontakt" className="nav-link">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
