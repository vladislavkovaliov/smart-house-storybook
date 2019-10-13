import React from 'react';
import styled from 'styled-components';
import { Status } from "./status";
import { colors } from '../../constants';
import Styled from '../../core/styled';

export const Container = styled(Styled.Container)`
  height: 148px;
  background-color: ${colors.secondary2};
  display: flex;
  flex-direction: column;
`;

export const Flex = styled(Styled.Flex)`
  align-items: center;
  flex-grow: 1;
`;

export function StatusByUtils() {
  return (
    <Container>
      <div style={{border: '1px solid red'}}>i am header :)</div>
      <Flex>
        <Status />
      </Flex>
    </Container>
  );
}
