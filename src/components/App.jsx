import { Profile } from './Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import data from '../data/data.json';
import { Container } from './Container';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory';
export const App = () => {
  return (
    <Container>
      <Profile profile={user} />
      <Statistics statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
