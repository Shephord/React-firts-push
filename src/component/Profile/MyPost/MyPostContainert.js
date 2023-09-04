import {
  addPostActionCreator,
  upDateNewPostMessage,
} from "../../../Redux/ProfileReducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.Posts,
    newPostText: state.ProfilePage.newPostText,
    buttonIcon: state.Icon.buttonIcon,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onPostCheng: (body) => {
      dispatch(upDateNewPostMessage(body));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;
