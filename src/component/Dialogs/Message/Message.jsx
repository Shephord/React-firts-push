import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.dialogs_messages}>
      <div className={classes.message}>
        <ul className={classes.user}>
          <img className={classes.img} src={props.url} alt='user1Img' />
          <li>user 1 {props.message}</li>
        </ul>
        <ul className={classes.user}>
          <li>user 2 {props.newMessage}</li>
        </ul>
      </div>
    </div>
  );
};

export default Message;
