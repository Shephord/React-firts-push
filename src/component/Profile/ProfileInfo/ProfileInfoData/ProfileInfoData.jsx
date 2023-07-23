function ProfileInfoData(props) {
  const { name, lasName, birthDay, city, Education, WebSite } = props;
  return (
    <>
      <h2>
        {name} {lasName}
      </h2>
      {birthDay && (
        <div>
          Birth Day: <span>{birthDay}</span>
        </div>
      )}
      {city && (
        <div>
          City: <span>{city}</span>
        </div>
      )}
      {Education && (
        <div>
          Education: <span>{Education}</span>
        </div>
      )}
      {WebSite && (
        <div>
          WEB Site: <a href={WebSite}>Google</a>
        </div>
      )}
    </>
  );
}

export default ProfileInfoData;

