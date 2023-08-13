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
      <ProfileInfo profile={props.profile.Profile} />
      <MyPost
        posts={props.profile.Posts}
        dispatch={props.dispatch}
        newPostText={props.profile.newPostText}
        buttonIcon={props.Icon.buttonIcon}
      />
    </div>
  );
}

export default Profile;
