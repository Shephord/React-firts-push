import React, { useState } from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dialogs(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  let newMessageElement = useRef();
  const sendMessage = () => {
    let res = newMessageElement.current.value;
    console.log(res);
  };
  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        <div className={classes.dialogs_person}>
          {props.dialogs.map((dialog) => (
            <Dialog name={dialog.name} id={dialog.id} url={dialog.url} />
          ))}
        </div>
        <div className={classes.dialogs_messages}>
          {props.messages.map((messageData) => (
            <Message message={messageData.message} url={messageData.url} />
          ))}
        </div>
      </div>
      <div className={classes.dialogs_input}>
        <textarea
          className={classes.dialogs_textarea}
          placeholder='Send a message'
          type='text'
          ref={newMessageElement}
          onChange={handleChange}
        >
          {" "}
        </textarea>
        <button
          className={`${classes.dialogs_button} ${text ? classes.active : ""}`}
          onClick={sendMessage}
        >
          {" "}
          <FontAwesomeIcon
            className={`${classes.icon} ${text ? classes.icon_active : ""}`}
            icon={props.buttonIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
