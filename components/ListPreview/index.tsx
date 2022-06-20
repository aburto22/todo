import { ITodoList } from '@localTypes/.';
import * as styles from './styles';

interface ListPreviewProps {
  list: ITodoList;
}

const ListPreview = ({ list }: ListPreviewProps) => (
  <styles.Container>
    <styles.Button type="button">
      <h1>{list.name}</h1>
    </styles.Button>
  </styles.Container>
);

export default ListPreview;
