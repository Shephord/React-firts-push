import { combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import { configureStore } from "@reduxjs/toolkit";
import iconReducer from "./IconReducer";
import sidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
  ProfilePage: profileReducer,
  DialogsPage: dialogReducer,
  Icon: iconReducer,
  Sidebar: sidebarReducer,
});

let store = configureStore({
  reducer: reducers,
});


export default store;
