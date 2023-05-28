import classes from "./MyPost.module.css";
import Post from "./Post/Post";
function MyPost() {
  let PostData = [
    {
      like: "02",
      name: "Marta",
      message: "hello, i lov pepsi",
    },
    { like: "61", name: "Marina", message: "Hello  i'm from Italy" },
    { like: "11", name: "Avrora", message: "" },
  ];
  return (
    <div className={classes.post}>
      <h2>My post</h2>
      <div className={classes.input}>
        <input value="what's new?" />
      </div>

      <button className={classes.button}>Send</button>
      {PostData.map((post) => (
        <Post like={post.like} name={post.name} message={post.message} />
      ))}
    </div>
  );
}

export default MyPost;
