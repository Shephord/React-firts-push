import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Nav(navItems) {
  const setActive = ({ isActive }) => (isActive ? classes.activeLink : "");
  return (
    <nav className={classes.nav}>
      {navItems.navItems.map((el, index) => (
        <div
          key={index}
          className={`${classes.item} ${
            index === navItems.navItems.length - 1 ? classes.last : ""
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
          {navItems.friendItems.map((el) => (
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
const mapStateProps = (state) => {
  return {
    navItems: state.Sidebar.Nav,
    friendItems: state.Sidebar.Friends,
  };
};

export default connect(mapStateProps)(Nav);
