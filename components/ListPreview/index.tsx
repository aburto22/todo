import Link from 'next/link';
import { ITodoList } from '@localTypes/.';
import * as styles from './styles';

interface ListPreviewProps {
  list: ITodoList;
}

const ListPreview = ({ list }: ListPreviewProps) => (
  <styles.Container>
    <Link href={`/lists/${list.id}`} passHref>
      <styles.Link href="dummy">
        <h1>{list.name}</h1>
      </styles.Link>
    </Link>
  </styles.Container>
);

export default ListPreview;
