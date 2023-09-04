import { Provider, connect } from "react-redux";
import {
  sendMessageCreator,
  upDateNewMessageBodyCreator,
} from "../../Redux/DialogReducer";

import Dialogs from "./Dialogs";

let mapStateProps = (state) => {
  return {
    dialogsPage: state.DialogsPage,
    Icon: state.Icon
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
 
    onNewMessageCheng: (e) => {
      let action = upDateNewMessageBodyCreator(e)
      dispatch(action);
    },
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
