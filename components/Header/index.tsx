import Link from 'next/link';
import * as styles from './styles';

const Header = () => (
  <styles.Header>
    <styles.Nav>
      <styles.Title>
        <Link href="/" passHref>
          <a href="dummy">
            More Todo
          </a>
        </Link>
      </styles.Title>
    </styles.Nav>
  </styles.Header>
);

export default Header;
