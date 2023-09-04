import { combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import { configureStore } from "@reduxjs/toolkit";
import iconReducer from "./IconReducer";
import sidebarReducer from "./SidebarReducer";
import userReducer from "./UserReducer";

let reducers = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogReducer,
  Icon: iconReducer,
  Sidebar: sidebarReducer,
  UsersPage: userReducer,
});

let store = configureStore({
  reducer: reducers,
});

window.store = store;

export default store;
