import PropTypes from 'prop-types';
import noPicture from './no-image.jpg';
import './Profile.css';


const Profile = ({avatar, name, tag, location, stats}) => {
  return (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>);
};

Profile.defaultProps = {
  avatar: noPicture,
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  avatar: PropTypes.string, 
  name: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired,
  followers: PropTypes.number, 
  views: PropTypes.number, 
  likes: PropTypes.number,
}

export default Profile;

