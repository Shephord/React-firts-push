import React, { useState } from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dialogs(props) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  let newMessageElement = useRef("textarea");
  let state = props.dialogsPage;

  let dialogsElement = state.Dialogs.map((dialog) => (
    <Dialog
      name={dialog.name}
      id={dialog.id}
      url={dialog.url}
      key={dialog.id}
    />
  ));
  let messageElements = state.Messages.map((messageData) => (
    <Message
      key={messageData.id}
      message={messageData.message}
      newMessage={messageData.newMessage}
      url={messageData.url}
    />
  ));

  let newMessageBody = state.newMessageBody;

  const handleChange = (event) => {
    setText(event.target.value);
    setSent(false);
    onNewMessageCheng(event.target.value);
  };

  const onNewMessageCheng = (e) => {
    props.onNewMessageCheng(e);
  };

  const onSendMessageClick = () => {
    if (text.trim() !== "") {
      props.onSendMessageClick();
      setSent(true);
    }
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
              className={`${classes.button} ${
                !text.trim() || sent ? classes.button_disable : ""
              }`}
              onClick={() => {
                onSendMessageClick();
                setSent(true);
              }}
            >
              {" "}
              <FontAwesomeIcon
                className={`${classes.icon} ${
                  !text.trim() || sent
                    ? classes.icon_disable
                    : classes.icon_active
                }`}
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
