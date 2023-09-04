
import classes from "./User.module.css";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.content}>
      <div>
        {pages.map((page) => (
          <span
            className={`${
              props.currentPage === page && classes.currentPage
            } ${classes.nexPage}`}
            onClick={() => props.onPageChanged(page)}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={classes.userPhoto}
                src={
                  u.picture.large != null
                    ? u.picture.large
                    : "https://images.squarespace-cdn.com/content/v1/602126db7a4e4c01fd9babb6/88103e02-5cd7-4b9c-8e62-ad212c2c4d37/Andrei+Pascu+che+lavora"
                }
                alt=''
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  className={classes.unfollow}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={classes.follow}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <h3>
                Name: {u.name.title} {u.name.first} {u.name.last}{" "}
              </h3>

              {/* <div>Phrase: {u.company.catchPhrase}</div> */}
              <div>
                Phone:{" "}
                <span style={{ color: "#fff", cursor: "pointer" }}>
                  {" "}
                  {u.phone}
                </span>{" "}
              </div>
            </span>
            <span>
              <div>Country: {u.location.country}</div>
              <div> City: {u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
