import { connect } from "react-redux";
import classes from "./ProfileInfo.module.css";
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData";

const ProfileInfo = (props) => {
  const { name, dob, location, Education, WebSite, picture, email, cell } =
    props.profile;
  return (
    <div className={classes.profile}>
      <div>
        <img className={classes.profile__img} alt='#' src={picture.large} />
      </div>
      <div className={classes.profile_content}>
        <ProfileInfoData
          name={name.first}
          lasName={name.last}
          birthDay={dob.date}
          age={dob.age}
          city={location.city}
          country={location.country}
          email={email}
          cell={cell}
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
