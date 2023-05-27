import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        <Dialog name='Andrei' id='1' />
        <Dialog name='Anton' id='2' />
        <Dialog name='Ion' id='3' />
      </div>
      <div className={classes.dialogs_messages}>
        <Message message='hello how are U?' />
        <Message message='hello u snaky boy' />
        <Message message='can we go tomorrow to cinema' />
      </div>
    </div>
  );
}

export default Dialogs;
