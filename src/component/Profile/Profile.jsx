import classes from "./Profile.module.css";
import Post from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileData from "../Date/ProfileDate/ProfileData";

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
      <ProfileInfo
        name={ProfileData.name}
        lasName={ProfileData.lasName}
        birthDay={ProfileData.birthDay}
        city={ProfileData.city}
        Education={ProfileData.Education}
        WebSite={ProfileData.WebSite}
        profileImg={ProfileData.profileImg}
      />
      <Post />
    </div>
  );
}

export default Profile;
