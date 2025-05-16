import './styles/Navbar.css';
import Logo from './assets/G1_logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><a href='/'><img src={Logo} alt="Logo G1" /></a></div>
    </nav>
  );
}

export default Navbar;