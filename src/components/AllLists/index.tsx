import { useUser } from '@auth0/nextjs-auth0';
import ListPreview from '@components/ListPreview';
import { useUserLists } from '@hooks/swr';
import MessageScreen from '@components/MessageScreen';
import Spinner from '@components/Spinner';
import { sortList } from '@lib/misc';
import * as styles from './styles';

const AllLists = () => {
  const { user } = useUser();
  const userId = user?.sub || '';
  const { lists } = useUserLists(userId);

  if (!lists) {
    return <Spinner size="normal" />;
  }

  if (lists.length === 0) {
    return <MessageScreen message="Create your first list" />;
  }

  return (
    <styles.List>
      {sortList(lists).map((list) => (
        <li key={list.id}>
          <ListPreview list={list} userId={userId} />
        </li>
      ))}
    </styles.List>
  );
};

export default AllLists;
