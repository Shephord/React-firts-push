import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
 import './header.css'
function Header() {
  return (
    <header className='header'>
      
      <FontAwesomeIcon icon={faEye} inverse size="3x" className="header-logo"/>
    </header>
  );
}

export default Header;
