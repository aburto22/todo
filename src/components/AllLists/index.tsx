import ListPreview from '@components/ListPreview';
import { useAppSelector } from '@hooks/redux';
import * as styles from './styles';

const AllLists = () => {
  const lists = useAppSelector((state) => state.user.lists);

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
