import { useUser } from '@auth0/nextjs-auth0';
import ListPreview from '@components/ListPreview';
import { useUserLists } from '@hooks/swr';
import * as styles from './styles';

const AllLists = () => {
  // const lists = useAppSelector((state) => state.user.lists);
  const { user } = useUser();
  const { lists } = useUserLists(user?.sub || '');

  if (!lists) {
    return null;
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
