import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
 import classes from './header.module.css'
function Header() {
  return (
    <header className={classes.header}>
      
      <FontAwesomeIcon icon={faEye} inverse size="3x" className={classes.logo}/>
    </header>
  );
}

export default Header;
