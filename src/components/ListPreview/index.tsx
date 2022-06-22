import Link from 'next/link';
import { ITodoList } from '@localTypes/client';
import { DeleteSvg, SnowSvg } from '@components/Svg';
import * as styles from './styles';

interface ListPreviewProps {
  list: ITodoList;
}

const ListPreview = ({ list }: ListPreviewProps) => (
  <styles.Container>
    <Link href={`/lists/${list.id}`} passHref>
      <styles.Link href="dummy">
        <h2>{list.name}</h2>
      </styles.Link>
    </Link>
    <styles.Side>
      <styles.FreezeButton
        type="button"
        size="large"
        title="freeze list"
      >
        <SnowSvg />
      </styles.FreezeButton>
      <styles.DeleteButton
        type="button"
        size="large"
        title="delete"
      >
        <DeleteSvg />
      </styles.DeleteButton>
    </styles.Side>
  </styles.Container>
);

export default ListPreview;
