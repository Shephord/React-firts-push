import classes from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Post(props) {
  return (
    <div className={classes.post}>
      <img
        src='https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1'
        alt='#'
      />
      <span className={classes.name}>{props.name}: </span>
      <span className={classes.message}>{props.message}</span>
      <div>
        <span>
          <FontAwesomeIcon icon={faHeart} />
          <div>
            <span>{props.like}</span>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Post;
