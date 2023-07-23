import classes from "./ProfileInfo.module.css";
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData";

const ProfileInfo = (props) => {
  const { profile } = props;
  const { name, lasName, birthDay, city, Education, WebSite, profileImg } =
    profile;
  return (
    <div className={classes.profile}>
      <div>
        <img className={classes.profile__img} alt='#' src={profileImg} />
      </div>
      <div className={classes.profile_content}>
        <ProfileInfoData
          name={name}
          lasName={lasName}
          birthDay={birthDay}
          city={city}
          Education={Education}
          WebSite={WebSite}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
