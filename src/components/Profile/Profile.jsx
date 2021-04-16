import propTypes from 'prop-types';
import noPicture from './no-image.jpg';


const Profile = (props) => {
  return (
<div className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt="Аватар пользователя"
      className="avatar"
      width="200"
    />
    <p className="name">{props.name}</p>
    <p className="tag">{props.tag}</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{props.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{props.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{props.likes}</span>
    </li>
  </ul>
</div>);
};

Profile.defaultProps = {
  avatar: noPicture,
};

Profile.propTypes = {
  name: propTypes.string.isRequired, 
  tag: propTypes.string.isRequired, 
  location: propTypes.string.isRequired, 
  avatar: propTypes.string, 
  followers: propTypes.number.isRequired, 
  views: propTypes.number.isRequired, 
  likes: propTypes.number.isRequired,
}

export default Profile;

