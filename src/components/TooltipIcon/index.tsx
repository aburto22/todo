import * as styles from './styles';

interface TooltipIconProps {
  message: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipIcon = ({ message, children, position }: TooltipIconProps) => (
  <styles.Container>
    <styles.Icon>
      {children}
    </styles.Icon>
    <styles.Tooltip position={position}>
      {message}
    </styles.Tooltip>
  </styles.Container>
);

export default TooltipIcon;

TooltipIcon.defaultProps = {
  position: 'right',
};
