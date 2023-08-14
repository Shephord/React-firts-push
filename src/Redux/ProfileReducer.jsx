const UP_DATE_NEW_POST_MESSAGE = "UP-DATE-NEW-POST-MESSAGE";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let rand = Math.floor(Math.random() * 300);

      let newPost = {
        like: rand,
        message: state.newPostText,
        name: "Mops",
      };
      state.Posts.push(newPost);
      state.newPostText = "";
      break;
    case UP_DATE_NEW_POST_MESSAGE:
      state.newPostText = action.newText;
      break;
    default:
      break;
  }

  return state;
};

export default profileReducer;
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
