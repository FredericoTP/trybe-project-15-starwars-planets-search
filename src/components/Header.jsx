import image from '../images/title.png';
import '../style/Header.css';

function Header() {
  return (
    <header className="header-container">
      <img
        className="header-img"
        src={ image }
        alt="title"
      />
    </header>
  );
}

export default Header;
