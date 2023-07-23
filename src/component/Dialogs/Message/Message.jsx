import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.dialogs_messages}>
      <div className={classes.message}>
        <div className={classes.user}>
          <img className={classes.img} src={props.url} alt='user1Img' />
          <div>user 1 {props.message}</div>
        </div>
        <div className={classes.user}>
          <img className={classes.img} src={props.url} alt='user2Img' />
          <div>user 2 {props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
