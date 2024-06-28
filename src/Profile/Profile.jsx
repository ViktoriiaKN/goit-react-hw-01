
const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div>
  <div>
    <img src={image} alt={`${name}'s avatar`}/>
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile
