import { useUser } from '@auth0/nextjs-auth0';
import ListPreview from '@components/ListPreview';
import { useUserLists } from '@hooks/swr';
import MessageScreen from '@components/MessageScreen';
import * as styles from './styles';

const AllLists = () => {
  // const lists = useAppSelector((state) => state.user.lists);
  const { user } = useUser();
  const { lists } = useUserLists(user?.sub || '');

  if (!lists) {
    return null;
  }

  if (lists.length === 0) {
    return <MessageScreen message="Create your first list" />;
  }

  return (
    <styles.List>
      {lists.map((list) => (
        <li key={list.id}>
          <ListPreview list={list} />
        </li>
      ))}
    </styles.List>
  );
};

export default AllLists;
