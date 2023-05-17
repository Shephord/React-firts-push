import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./nav.module.css";
function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        {" "}
        <a href='/profile'>
          <FontAwesomeIcon icon={faUser} /> Profile
        </a>
      </div>
      <div className={classes.item}>
        <a href='/dialogs'>
          <FontAwesomeIcon icon={faMessage} /> Messages
        </a>
      </div>
      <div className={classes.item}>
        <a href='/news'>
          <FontAwesomeIcon icon={faNewspaper} /> News
        </a>
      </div>
      <div className={classes.item}>
        <a href='/music'>
          <FontAwesomeIcon icon={faMusic} /> Music
        </a>
      </div>
      <div className={classes.item}>
        <a href='/settings'>
          <FontAwesomeIcon icon={faGear} /> Settings
        </a>
      </div>
    </nav>
  );
}

export default Nav;
