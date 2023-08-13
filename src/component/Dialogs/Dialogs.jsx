import React, { useState } from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dialogs(props) {
  const [text, setText] = useState("");
  let newMessageElement = useRef("textarea");

  const handleChange = (event) => {
    let text = newMessageElement.current.value;
    setText(event.target.value);
    onPostCheng(text);
  };

  const onPostCheng = (text) => {
    props.dispatch({ type: "UP-DATE-NEW-MESSAGE", newText: text });
  };

  const sendMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        <div className={classes.dialogs_person}>
          {props.dialogs.Dialogs.map((dialog) => (
            <Dialog name={dialog.name} id={dialog.id} url={dialog.url} />
          ))}
        </div>

        <div className={classes.dialogs_messages}>
          {props.dialogs.Messages.map((messageData) => (
            <Message
              message={messageData.message}
              newMessage={messageData.newMessage}
              url={messageData.url}
            />
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
            icon={props.Icon.buttonIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default Dialogs;
