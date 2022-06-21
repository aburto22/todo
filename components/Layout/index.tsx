import Header from '@components/Header';
import Footer from '@components/Footer';
import Authentication from '@components/Authentication';
import * as styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <styles.App>
    <Header />
    <Authentication>
      {children}
    </Authentication>
    <Footer />
  </styles.App>
);

export default Layout;
