import './styles/Navbar.css';
import Logo from './assets/G1_logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><img src={Logo} alt="Logo G1" /></div>
    </nav>
  );
}

export default Navbar;