import classes from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.background}
          alt='#'
          src='https://wallpapers.com/images/hd/1200x480-trippy-cloudy-galaxy-o884x4wppksi3lkw.jpg'
        />
      </div>
      <ProfileInfo profile={props.profile} />
      <MyPost
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default Profile;
