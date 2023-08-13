import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
  faUserGroup,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

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
      newPostText: "how are you?",
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
          newMessage: "hi",
        },
      ],
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
      message: this.getState().ProfilePage.newPostText,
      name: "Mops",
    };
    this.getState().ProfilePage.Posts.push(newPost);
    this.getState().ProfilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this.getState().ProfilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  _addMessage() {
    let newMessages = {
      message: this.getState().DialogsPage.Messages.newMessage,
    };
    this.getState().DialogsPage.Messages.push(newMessages);
    this.getState().DialogsPage.Messages.newMessage = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessage(newText) {
    this.getState().DialogsPage.Messages.newMessage = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
     this._addPost();
    } else if (action.type === "UP-DATE-NEW-POST-MESSAGE") {
      this._updateNewPostText(action.newText)
    }else if (action.type === "ADD-MESSAGE") {
      this._addMessage()
    }else if (action.type === "UP-DATE-NEW-MESSAGE") {
      this._updateNewMessage(action.newText)
    }
  },
};

export default Store;
