import classes from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <div>
        <img
          className={classes.profile__img}
          alt='#'
          src={props.profileImg}
        />
      </div>
      <div className={classes.profile_content}>
           <h2>{props.name} { props.lasName}</h2>
        <div>
          Birth Day: <spam>{props.birthDay}</spam>
        </div>
        <div>
          City: <spam>{props.city}</spam>
        </div>
        <div>
          Education: <spam>{props.Education}</spam>
        </div>
        <div>
          WEB Site: <a href={props.WebSite}>Google</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
