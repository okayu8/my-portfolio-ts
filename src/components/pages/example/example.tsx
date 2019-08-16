import * as React from "react";
import styled from "styled-components";

interface IExampleProps {
  /** 表示するテキスト */
  text: string;
  /**
   * true: テキスト表示 false: テキスト非表示
   * @default false
   */
  flag?: boolean;
  /** ボタンを押した時のイベントハンドラ */
  action(): void;
}

const Example = (props: IExampleProps) => {
  const { text, flag, action } = props;
  const [count, countChg] = React.useState(0);
  const countUp = React.useCallback(() => countChg(prev => prev + 1), []);
  const countDown = React.useCallback(() => countChg(prev => prev - 1), []);

  return (
    <StyledExample>
      {flag && <p>{text}</p>}
      <button onClick={action}>ボタン</button>
      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </StyledExample>
  );
};

const StyledExample = styled.div`
  padding: 24px;
`;

export default Example;
