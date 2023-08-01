import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
  faUserGroup,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "../Render";
let state = {
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
      },
      {
        url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        message: "hello how are U?",
      },
      {
        url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        message: "hello u snaky boy",
      },
      {
        url: "https://www.pngitem.com/pimgs/m/348-3481514_circle-profile-girl-hd-png-download.png",
        message: "can we go tomorrow to cinema",
      },
    ],
    newMessage: "Send a message",
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
};
window.state = state;
// Profile page Function adding and update Post
let addPost = () => {
  let newPost = {
    like: 1,
    message: state.ProfilePage.newPostText,
    name: "Mops",
  };
  state.ProfilePage.Posts.push(newPost);
  state.ProfilePage.newPostText = "";
  render(state);
};

let updateNewPostText = (newText) => {
  state.ProfilePage.newPostText = newText;
  render(state);
};
// Dialogs new Message
let addMessage = () => {
  let newMessage = {
    message: state.DialogsPage.newMessage,
  };
  state.DialogsPage.Messages.push(newMessage);
  state.DialogsPage.newMessage = "";
  render(state);
};
export { addPost, updateNewPostText };
export default state;
