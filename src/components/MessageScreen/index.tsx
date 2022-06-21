import * as styles from './styles';

interface MessageScreenProps {
  message: string;
}

const MessageScreen = ({ message }: MessageScreenProps) => (
  <styles.Container>
    <styles.Message>{message}</styles.Message>
  </styles.Container>
);

export default MessageScreen;
