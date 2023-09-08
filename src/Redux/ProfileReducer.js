const UP_DATE_NEW_POST_MESSAGE = "UP-DATE-NEW-POST-MESSAGE";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  Profile: {
    name: { title: "Mr", first: "Andrei", last: "Bunescu" },
    "dob": {
      "date": "08/12/1994",
      "age": 28
    },
    location: {
      city: "Venice",
      country: "Italy",
    },
    Education: `IPSEOA Andrea Barbarigo`,
    WebSite: "https:/google.com",
    id: 51,
    picture: {
      large:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  },
  Posts: [
    { like: "02", name: "Marta", message: "Hello, i lov pepsi" },
    { like: "61", name: "Marina", message: "Hello  i'm from Italy" },
    { like: "11", name: "Avrora", message: "Monday is a greet day " },
    { like: "12", name: "Alma", message: "Monday is a greet day " },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let rand = Math.floor(Math.random() * 300); // Random № of likes

      let newPost = {
        like: rand,
        message: state.newPostText,
        name: "Mops",
      };
      return {
        ...state, // we create a state copy
        Posts: [...state.Posts, newPost],
        //. in ..state.post we create a new array,and the newPost it's adding a new post in the end
        // we don't cheng initial Post bt we create a copy and cheng the copy
        newPostText: "",
      };
    case UP_DATE_NEW_POST_MESSAGE:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        Profile: action.profile,
      };
    default:
      return state;
  }
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

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
