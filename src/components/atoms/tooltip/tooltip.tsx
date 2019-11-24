import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  value: string;
}

const Tooltip = (props: IProps) => {
  const { className, value } = props;
  return <StyledTooltip className={className}>{value}</StyledTooltip>;
};

const StyledTooltip = styled.div``;

export default Tooltip;
