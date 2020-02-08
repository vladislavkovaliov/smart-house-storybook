import React from 'react';
import styled from 'styled-components';
import { Status } from "./status";
import { colors } from '../../constants';
import { Container, Flex } from '../../core/styled';



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
