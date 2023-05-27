import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <div className={classes.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default Dialog;
