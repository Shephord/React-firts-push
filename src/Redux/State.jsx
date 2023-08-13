import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
  faUserGroup,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const UP_DATE_NEW_POST_MESSAGE = "UP-DATE-NEW-POST-MESSAGE";
const ADD_POST = "ADD-POST";

const UP_DATE_NEW_MESSAGE_BODY = "UP-DATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let Store = {
  _state: {
    Icon: {
      buttonIcon: faPaperPlane,
    },
    ProfilePage: {
      Profile: {
        name: "Andrei",
        lasName: "Bunescu",
        birthDay: "08/12/1994",
        city: "Venice",
        Education: `IPSEOA Andrea Barbarigo`,
        WebSite: "https:/google.com",

        profileImg:
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      Posts: [
        { like: "02", name: "Marta", message: "Hello, i lov pepsi" },
        { like: "61", name: "Marina", message: "Hello  i'm from Italy" },
        { like: "11", name: "Avrora", message: "Monday is a greet day " },
        { like: "12", name: "Alma", message: "Monday is a greet day " },
      ],
      newPostText: "",
    },
    DialogsPage: {
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
    },
    nav: {
      Friends: [
        {
          name: "Andrei",
          imgUrl:
            "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        },
        {
          name: "David",
          imgUrl:
            "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        },
        {
          name: "Artem",
          imgUrl:
            "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        },
      ],
      Item: [
        {
          pageUrl: "/profile",
          PageName: "Profile",
          PageIcon: faUser,
        },
        { pageUrl: "/dialogs", PageName: "Dialogs", PageIcon: faMessage },
        { pageUrl: "/news", PageName: "News", PageIcon: faNewspaper },
        { pageUrl: "/music", PageName: "Music", PageIcon: faMusic },
        { pageUrl: "/settings", PageName: "Settings", PageIcon: faGear },
        { pageUrl: "/friends", PageName: "Friends", PageIcon: faUserGroup },
      ],
    },
  },

  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let rand = Math.floor(Math.random() * 300);

    let newPost = {
      like: rand,
      message: this._state.ProfilePage.newPostText,
      name: "Mops",
    };
    this._state.ProfilePage.Posts.push(newPost);
    this._state.ProfilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.ProfilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  _addMessage() {
    let body = this._state.DialogsPage.newMessageBody;

    this._state.DialogsPage.Messages.push({ id: 4, message: body });
    this._state.DialogsPage.newMessageBody = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessage(body) {
    this._state.DialogsPage.newMessageBody = body;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UP_DATE_NEW_POST_MESSAGE) {
      this._updateNewPostText(action.newText);
    } else if (action.type === SEND_MESSAGE) {
      this._addMessage();
    } else if (action.type === UP_DATE_NEW_MESSAGE_BODY) {
      this._updateNewMessage(action.body);
    }
  },
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const upDateNewPostMessage = (text) => {
  return {
    type: UP_DATE_NEW_POST_MESSAGE,
    newText: text,
  };
};

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

export default Store;
