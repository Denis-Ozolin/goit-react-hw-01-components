import PropTypes from 'prop-types';
import noPicture from './no-image.jpg';

const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, name, avatar, isOnline}) => (
        <li className="item" key={id}>
          <span className="status">{isOnline?"ONLINE":"OFFLINE"}</span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul> 
  )
};

FriendList.defaultProps = {
  avatar: noPicture,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string, 
      name: PropTypes.string.isRequired, 
      id: PropTypes.number.isRequired, 
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;