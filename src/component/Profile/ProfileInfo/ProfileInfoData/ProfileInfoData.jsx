function ProfileInfoData(props) {
  const {
    name,
    lasName,
    birthDay,
    city,
    Education,
    WebSite,
    country,
    email,
    cell,
    age,
  } = props;
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
       {age && (
        <div>
          Age: <span>{age}</span>
        </div>
      )}
      {city && (
        <div>
          City: <span>{city}</span>
        </div>
      )}
      {country && (
        <div>
          Country: <span>{country}</span>
        </div>
      )}
      {email && (
        <div>
          Email: <a href={WebSite}>{email}</a>
        </div>
      )}
      {cell && (
        <div>
          Phone: <a href={WebSite}>{cell}</a>
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
