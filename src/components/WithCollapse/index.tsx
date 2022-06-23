import { useState, useRef, useLayoutEffect } from 'react';
import { ChevronUpSvg, ChevronDownSvg } from '@components/Svg';
import * as styles from './styles';

interface WithCollapseProps {
  Title: JSX.Element;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const WithCollapse = ({ Title, children, defaultOpen = false }: WithCollapseProps) => {
  const [isShown, setIsShown] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) {
      return;
    }

    setHeight(contentRef.current.scrollHeight);
  }, []);

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
        height={height}
      >
        {children}
      </styles.Content>
    </styles.Container>
  );
};

export default WithCollapse;

WithCollapse.defaultProps = {
  defaultOpen: false,
};
