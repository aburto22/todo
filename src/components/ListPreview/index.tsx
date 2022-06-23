import Link from 'next/link';
import { ITodoList } from '@localTypes/client';
import { DeleteSvg, SnowSvg } from '@components/Svg';
import { useUserLists } from '@hooks/swr';
import { removeListFromArray, toggleList, updateListInArray } from '@lib/lists';
import { deleteListFetcher, updateListSummaryFetcher } from '@lib/listFetchers';
import * as styles from './styles';

interface ListPreviewProps {
  list: ITodoList;
  userId: string;
}

const ListPreview = ({ list, userId }: ListPreviewProps) => {
  const { lists, mutate } = useUserLists(userId);

  const handleDeleteClick = () => {
    if (!lists) {
      return;
    }

    const updatedLists = removeListFromArray(lists, list.id);

    const options = {
      optimisticData: updatedLists,
      rollbackOnError: true,
    };

    mutate(async () => {
      const deletedList = await deleteListFetcher(list.id);
      return lists.filter((l) => l.id !== deletedList.id);
    }, options);
  };

  const handleFreezeClick = () => {
    if (!lists) {
      return;
    }

    const updatedList = toggleList(list);
    const updatedLists = updateListInArray(lists, updatedList);

    const options = {
      optimisticData: updatedLists,
      rollbackOnError: true,
    };

    mutate(async () => {
      const savedList = await updateListSummaryFetcher(updatedList);
      return lists.map((l) => (l.id === savedList.id ? savedList : l));
    }, options);
  };

  return (
    <styles.Container>
      <Link href={`/lists/${list.id}`} passHref>
        <styles.Link href="dummy">{list.name}</styles.Link>
      </Link>
      <styles.Side>
        <styles.FreezeButton
          type="button"
          size="large"
          title="toggle freeze"
          active={list.isFreezed}
          onClick={handleFreezeClick}
        >
          <SnowSvg />
        </styles.FreezeButton>
        <styles.DeleteButton
          type="button"
          size="large"
          title="delete"
          onClick={handleDeleteClick}
        >
          <DeleteSvg />
        </styles.DeleteButton>
      </styles.Side>
    </styles.Container>
  );
};

export default ListPreview;
