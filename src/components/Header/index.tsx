/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import * as styles from './styles';

const Header = () => {
  const { user } = useUser();

  return (
    <styles.Header>
      <styles.Nav>
        <styles.Title>
          <Link href="/" passHref>
            <a href="dummy">
              More Todo
            </a>
          </Link>
        </styles.Title>
        {user ? <a href="/api/auth/logout">Logout</a> : <a href="/api/auth/login">Login</a>}
      </styles.Nav>
    </styles.Header>
  );
};

export default Header;
