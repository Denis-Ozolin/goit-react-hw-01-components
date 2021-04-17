import Profile from '../Profile/Profile';
import user from '../../social-profile/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData  from '../../statistics/statistical-data.json';
import FriendList from '../Friend-list/FriendList';
import friends from '../../friend-list/friends.json';
import TransactionHistory from '../Transaction-history/TransactionHistory';
import transactions from '../../transaction-history/transactions.json';

const App = () =>{
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};

export default App;