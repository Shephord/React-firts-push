import { useState } from "react";
import { useRef } from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addPostActionCreator,
  upDateNewPostMessage,
} from "../../../Redux/ProfileReducer";

function MyPost(props) {
  const [text, setText] = useState("");
  let newPostElement = useRef(null);

  const handleChange = (event) => {
    let text = newPostElement.current.value;
    setText(event.target.value);
    onPostCheng(text);
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostCheng = (text) => {
    let action = upDateNewPostMessage(text);
    props.dispatch(action);
  };
  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.textarea}>
        <textarea
          placeholder="how are you?"
          onChange={handleChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button className={classes.button} onClick={addPost}>
          <FontAwesomeIcon
            className={`${classes.icon} ${text ? classes.icon_active : ""}`}
            icon={props.buttonIcon}
          />
        </button>
      </div>

      {props.posts.map((post) => (
        <Post like={post.like} name={post.name} message={post.message} />
      ))}
    </div>
  );
}

export default MyPost;
