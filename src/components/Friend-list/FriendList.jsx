import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, name, avatar, isOnline}) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul> 
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired, 
      id: PropTypes.number.isRequired, 
      isOnline: PropTypes.bool.isRequired,
    })
  )
};

export default FriendList;