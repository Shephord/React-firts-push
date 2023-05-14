import classes from "./Profile.module.css";
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

      <div>
        <img
          className={classes.profile}
          alt='#'
          src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
      </div>

      <div>
        My post
        <div className={`${classes.post} ${classes.active} `}>new Post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>

          <div>post 3</div>

          <div>post 4</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
