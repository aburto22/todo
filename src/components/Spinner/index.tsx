import * as styles from './styles';

interface SpinnerProps {
  size: 'normal',
}

const Spinner = ({ size = 'normal' }: SpinnerProps) => (
  <styles.Container>
    <styles.Spinner size={size} />
  </styles.Container>
);

export default Spinner;
