import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainert";

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
      <ProfileInfo profile={props.profile } />
      <MyPostContainer />
    </div>
  );
}

export default Profile;
