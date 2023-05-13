import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
 
function Header() {
  return (
    <header className='header'>
      
      <FontAwesomeIcon icon={faEye} inverse size="3x" className="fa-eye"/>
    </header>
  );
}

export default Header;
