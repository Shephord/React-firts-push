import classes from "./Profile.module.css";
import Post from "./MyPost/MyPost"
function Profile() {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.background}
          alt='#'
          src='https://wallpapers.com/images/hd/1200x480-trippy-cloudy-galaxy-o884x4wppksi3lkw.jpg'
        />
      </div>
      <div className={classes.profile}>
        <div>
          <img
            className={classes.profile__img}
            alt='#'
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          />
        </div>
        <div className={classes.profile_content}>
          <h2>Flayj Tril</h2>
          <div>
            Birth Day: <spam>09/12/1994</spam>
          </div>
          <div>
            City: <spam>Venice</spam>
          </div>
          <div>
            Education: <spam>BSU'11</spam>
          </div>
          <div>
            WEB Site: <a href='https://google.com'>Google</a>
          </div>
        </div>
      </div>
      <Post />
    </div>
  );
}

export default Profile;
