import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        <div className={classes.dialogs_person}>
          {props.dialogs.map((dialog) => (
            <Dialog name={dialog.name} id={dialog.id} url={dialog.url} />
          ))}
        </div>
        <div className={classes.dialogs_messages }>
          {props.messages.map((messageData) => (
            <Message message={messageData.message} url={messageData.url} />
          ))}
        </div>
      </div>
      <div className={classes.dialogs_input}>
        <input type='text' />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
