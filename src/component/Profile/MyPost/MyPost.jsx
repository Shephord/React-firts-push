import { useRef } from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";


function MyPost(props) {
  let newPostElement = useRef('input');
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  };
  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.input}>
        <input ref={newPostElement} />
      </div>

      <button className={classes.button} onClick={addPost}>
        Send
      </button>
      {props.posts.map((post) => (
        <Post like={post.like} name={post.name} message={post.message} />
      ))}
    </div>
  );
}

export default MyPost;
