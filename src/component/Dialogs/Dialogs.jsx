import React, { useState } from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  sendMessageCreator,
  upDateNewMessageBodyCreator,
} from "../../Redux/State";

function Dialogs(props) {
  const [text, setText] = useState("");
  let newMessageElement = useRef("textarea");

  let dialogsElement = props.dialogs.Dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} url={dialog.url} />
  ));
  let messageElements = props.dialogs.Messages.map((messageData) => (
    <Message
      message={messageData.message}
      newMessage={messageData.newMessage}
      url={messageData.url}
    />
  ));
  let newMessageBody = props.dialogs.newMessageBody
  const handleChange = (event) => {
    let text = newMessageElement.current.value;
    setText(event.target.value);
    onNewMessageCheng(text);
  };

  const onNewMessageCheng = (e) => {
    let body = upDateNewMessageBodyCreator(e);
    props.dispatch(body);
  };

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  return (
    <div className={`${classes.dialogs}  ${"content"}`}>
      {" "}
      <div className={classes.dialogs_item}>
        <div className={classes.dialogs_person}>{dialogsElement}</div>

        <div className={classes.dialogs_messages}>{messageElements}</div>
        <div className={classes.dialogs_input}>
          <div>
            <textarea
              value={newMessageBody}
              className={classes.dialogs_textarea}
              placeholder='Send a message'
              type='text'
              ref={newMessageElement}
              onChange={handleChange}
            >
              {" "}
            </textarea>
          </div>
          <div>
            {" "}
            <button
              className={`${classes.dialogs_button} ${
                text ? classes.active : ""
              }`}
              onClick={onSendMessageClick}
            >
              {" "}
              <FontAwesomeIcon
                className={`${classes.icon} ${text ? classes.icon_active : ""}`}
                icon={props.Icon.buttonIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
