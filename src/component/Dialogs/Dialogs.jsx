import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useRef } from "react";

function Dialogs(props) {
  let newMessageElement = useRef()
  const sendMessage = () => {
   let res =  newMessageElement.current.value
    console.log(res);
  }
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
        <input type='text' ref={newMessageElement} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
