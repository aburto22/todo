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
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </styles.Nav>
  </styles.Header>
);

export default Header;
