import { Provider, connect } from "react-redux";
import classes from "./ProfileInfo.module.css";
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData";

const ProfileInfo = (profile) => {
  const { name, lasName, birthDay, city, Education, WebSite, profileImg } =
    profile.profile;
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

const mapStateProps = (state) => {
  return {
    profile: state.ProfilePage.Profile,
  };
};

export default connect(mapStateProps)(ProfileInfo);
