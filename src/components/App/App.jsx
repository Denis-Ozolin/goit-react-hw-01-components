import Profile from '../Profile/Profile';
import user from '../../social-profile/user.json';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friend-list/FriendList';
import TransactionHistory from '../Transaction-history/TransactionHistory';

const App = () =>{
  return (
    <>
      <Profile
        name={user.name} 
        tag={user.tag} 
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers} 
        views={user.stats.views} 
        likes={user.stats.likes}
      />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
};

export default App;