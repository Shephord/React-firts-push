import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.dialogs_messages}>
        <div className={classes.message}>{ props.message}</div>
    </div>
  );
};

export default Message;
