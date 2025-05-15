import './styles/About.css';
import Footer from './Footer';
import Navbar from './Navbar.jsx';

function About() {
  return (
    <div className="about-page">
      <Navbar />
        <div className="about">
          
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are dedicated to providing the best services and experiences for our users.
          </p>
          <p>
            Our mission is to create high-quality solutions that meet your needs and exceed your expectations.
          </p>
        </div>
    <Footer />
    </div>
  );
}

export default About;