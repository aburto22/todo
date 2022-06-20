import Header from '@components/Header';
import Footer from '@components/Footer';
import * as styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <styles.App>
    <Header />
    {children}
    <Footer />
  </styles.App>
);

export default Layout;
