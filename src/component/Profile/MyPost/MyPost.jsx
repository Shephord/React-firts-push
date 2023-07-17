import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import PostData from "../../Date/ProfileDate/PostDate";
function MyPost() {
  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.input}>
        <input value="what's new?" />
      </div>

      <button className={classes.button}>Send</button>
      {PostData.map((post) => (
        <Post
          like={post.like}
          name={post.name}
          message={post.message}
          
        />
      ))}
    </div>
  );
}

export default MyPost;
