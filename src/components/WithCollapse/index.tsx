import { useState, useRef } from 'react';
import { ChevronUpSvg, ChevronDownSvg } from '@components/Svg';
import * as styles from './styles';

interface WithCollapseProps {
  Title: JSX.Element;
  children: React.ReactNode;
}

const WithCollapse = ({ Title, children }: WithCollapseProps) => {
  const [isShown, setIsShown] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <styles.Container isShown={isShown}>
      <styles.CollapseButton
        type="button"
        onClick={() => setIsShown((state) => !state)}
      >
        {Title}
        {isShown ? <ChevronDownSvg /> : <ChevronUpSvg />}
      </styles.CollapseButton>
      <styles.Content
        isShown={isShown}
        ref={contentRef}
        height={contentRef.current?.scrollHeight || 0}
      >
        {children}
      </styles.Content>
    </styles.Container>
  );
};

export default WithCollapse;
