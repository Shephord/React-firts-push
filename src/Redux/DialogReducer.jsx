const UP_DATE_NEW_MESSAGE_BODY = "UP-DATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
const initialState = {
  Dialogs: [
    {
      name: "Andrei",
      id: 1,
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
    },
    {
      name: "Anton",
      id: 2,
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
    },
    {
      name: "Ion",
      id: 3,
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
    },
  ],
  Messages: [
    {
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
      message: "hello how are you ? ",
      id: 1,
    },
    {
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
      message: "hello how are you ? ",

      id: 2,
    },
    {
      url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
      message: "hello how are you ? ",
      id: 3,
    },
  ],
  newMessageBody: "",
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        Messages: [...state.Messages, {id: 4, message: body }],
        newMessageBody: "",
      };

    case UP_DATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
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
