import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;