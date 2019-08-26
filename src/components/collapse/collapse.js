import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Styled from '../../core/styled';
import classnames from 'classnames';
import { colors } from "../../constants";
import {width} from "styled-system";


export const CircleBtn = styled.button`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 0;
  left: calc(50% - 12.5px); 
  background-color: ${colors.blue};
  border: none;
`;

export const StyledCollapse = styled(Styled.Container)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 12.5px;
`;

export const Temp = styled.div`
  height: 0;
  overflow: hidden;
  width: 100%;
  transition: height .7s;
  background-color: ${colors.primary};
  padding-top: 12.5px;
  border-top: 2px solid ${colors.secondary2};
  &.active {
    height: 158px;
  }
`;

export const Flex = styled(Styled.Flex)`
  height: 100%;
  padding: 0 16px;
  overflow-x: scroll;
  
  & > div {
    margin: 0 8px;
  }
`;

export const Temp2 = styled.button`
  height: 99px;
  min-width: 99px;
  display: flex;
  border-radius: 5px;
  position: relative;
  background-color: transparent;
  border-style: dashed;
  border-color: ${colors.secondary2};
  
  &:before {
    content: "";
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    background-color: ${colors.blue};
  }
`;

export function Collapse(props) {
  const [isOpened, setOpened] = useState( false);
  const { items, renderFn } = props;
  const onClick = useCallback(
    () => setOpened(!isOpened),
    [isOpened]
  );

  return (
    <StyledCollapse>
      <CircleBtn onClick={onClick} />
      <Temp className={classnames({ active: isOpened })}>
        <Styled.Container
          height="150px"
          width="100%"
        >
          <Flex

            alignItems='center'
          >
            <Temp2 />
            {items.map((item) => renderFn(item))}
          </Flex>
        </Styled.Container>
      </Temp>
    </StyledCollapse>
  );
}

Collapse.defaultProps = {
  items: [],
  renderFn: () => {},
};

Collapse.propTypes = {
  items: PropTypes.array,
  renderFn: PropTypes.func,
};
