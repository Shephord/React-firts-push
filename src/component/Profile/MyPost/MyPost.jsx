import { useRef, useState } from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyPost(props) {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      like={post.like}
      name={post.name}
      message={post.message}
    />
  ));

  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  let newPostElement = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
    setSent(false)
    onPostCheng(event.target.value);
  };

  let addPost = () => {
    if (text.trim() !== "") {
      props.addPost();
      setSent(true)
    }
  };

  let onPostCheng = (text) => {
    props.onPostCheng(text);
  };

  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.textarea}>
        <textarea
          placeholder='how are you?'
          onChange={handleChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button
          className={`${classes.button} ${
            !text.trim() || sent ? classes.button_disable : ""
          }`}
          onClick={() => {
            addPost();
            setSent(true);
          }}
          disabled={!text.trim()}
        >
          <FontAwesomeIcon
            className={`${classes.icon} ${
              !text.trim() || sent ? classes.icon_disable : classes.icon_active
            }`}
            icon={props.buttonIcon}
          />
        </button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPost;
