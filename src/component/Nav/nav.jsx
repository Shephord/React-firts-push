import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";
function Nav() {
  const setActive = ({ isActive }) => (isActive ? classes.activeLink : "");
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        {" "}
        <NavLink to='/profile' className={setActive}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={setActive}>
          <FontAwesomeIcon icon={faMessage} /> Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={setActive}>
          <FontAwesomeIcon icon={faNewspaper} /> News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={setActive}>
          <FontAwesomeIcon icon={faMusic} /> Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={setActive}>
          <FontAwesomeIcon icon={faGear} /> Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
