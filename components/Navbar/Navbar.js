import './Navbar.css';

function NavBar() {
  return (
    <div className="NavBar navbar">
      <nav>
        <ul className="NavBarMenu navbar-menu">
          <li className="AppLink"><a href="#">Accueil</a></li>
          <li className="AppLink"><a href="#">Équipe</a></li>
          <li className="AppLink"><a href="#">Services</a></li>
          <li className="AppLink"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;