import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import DialogsData from "../Date/DialogsData/DialogsData";
import MessagesData from "../Date/DialogsData/MessagesData";

function Dialogs(props) {
  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        {DialogsData.map((dialog) => (
          <Dialog name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={classes.dialogs_messages}>
        {MessagesData.map((messageData) => (
          <Message message={messageData.message} />
        ))}
      </div>
    </div>
  );
}

export default Dialogs;
