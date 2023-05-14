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
        <a href='#f'>
          <FontAwesomeIcon icon={faUser} /> Profile
        </a>
      </div>
      <div className={classes.item}>
        <a href='#f'>
          <FontAwesomeIcon icon={faMessage} /> Messages
        </a>
      </div>
      <div className={classes.item}>
        <a href='#f'>
          <FontAwesomeIcon icon={faNewspaper} /> News
        </a>
      </div>
      <div className={classes.item}>
        <a href='#f'>
          <FontAwesomeIcon icon={faMusic} /> Music
        </a>
      </div>
      <div className={classes.item}>
        <a href='#f'>
          <FontAwesomeIcon icon={faGear} /> Settings
        </a>
      </div>
    </nav>
  );
}

export default Nav;
