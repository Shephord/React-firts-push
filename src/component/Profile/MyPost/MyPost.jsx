import classes from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.input}>
        <input value="what's new?" />
      </div>

      <button className={classes.button}>Send</button>
      <Post like='02' name='Marta' message='hello, i lov pepsi' />
      <Post like='61' name='Marina' message="Hello  i'm from Italy" />
    </div>
  );
}

export default MyPost;
