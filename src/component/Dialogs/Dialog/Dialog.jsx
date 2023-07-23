import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <div className={classes.ab}>
        <NavLink to={`/dialogs/${props.id}`}>
          {" "}
          <img
            className={classes.img}
            src= {props.url}
            alt='userImage'
          />
          {props.name}{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Dialog;
