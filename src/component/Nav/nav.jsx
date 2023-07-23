import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";
function Nav(props) {
  const setActive = ({ isActive }) => (isActive ? classes.activeLink : "");
  return (
    <nav className={classes.nav}>
      {props.item.map((el, index) => (
        <div
          key={index}
          className={`${classes.item} ${
            index === props.item.length - 1 ? classes.last : ""
          }`}
        >
          {" "}
          <NavLink to={el.pageUrl} className={setActive}>
            <FontAwesomeIcon icon={el.PageIcon} /> {el.PageName}
          </NavLink>
        </div>
      ))}

      <div className={classes.friends}>
        <div className={classes.activeFriends}>
          {props.friends.map((el) => (
            <div key={el.name} className={classes.friend}>
              <img className={classes.img} src={el.imgUrl} alt='#' />
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
