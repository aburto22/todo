import Link from 'next/link';
import { ITodoList } from '@localTypes/client';
import * as styles from './styles';

interface ListPreviewProps {
  list: ITodoList;
}

const ListPreview = ({ list }: ListPreviewProps) => (
  <styles.Container>
    <Link href={`/lists/${list._id}`} passHref>
      <styles.Link href="dummy">
        <h2>{list.name}</h2>
      </styles.Link>
    </Link>
  </styles.Container>
);

export default ListPreview;
