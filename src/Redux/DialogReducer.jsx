const UP_DATE_NEW_MESSAGE_BODY = "UP-DATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;

      state.Messages.push({ id: 4, message: body });
      state.newMessageBody = "";
      break;
    case UP_DATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      break;
    default:
      return state;
  }

  return state;
};
export default dialogReducer;

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const upDateNewMessageBodyCreator = (body) => {
  return {
    type: UP_DATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
