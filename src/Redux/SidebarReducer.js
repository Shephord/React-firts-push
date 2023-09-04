import {
  faUser,
  faMessage,
  faNewspaper,
  faMusic,
  faGear,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const initialState = {
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
  Nav: [
    {
      pageUrl: "/profile",
      PageName: "Profile",
      PageIcon: faUser,
    },
    { pageUrl: "/dialogs", PageName: "Dialogs", PageIcon: faMessage },
    { pageUrl: "/news", PageName: "News", PageIcon: faNewspaper },
    { pageUrl: "/music", PageName: "Music", PageIcon: faMusic },
    { pageUrl: "/settings", PageName: "Settings", PageIcon: faGear },
    { pageUrl: "/users", PageName: "User", PageIcon: faUserGroup },
    { pageUrl: "/friends", PageName: "Friends", PageIcon: faUserGroup },

  ],
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
