import React from "react";
import { colors } from '../../constants';
import Styled from '../../core/styled';
import styled from 'styled-components';
import { Text } from '../../core/atoms';
import { flex, space, border } from 'styled-system';

export const Container = styled(Styled.Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Flex = styled(Styled.Flex)`
  display: flex;
  ${flex};
  ${space};
  ${border};
  //border-left: 1px solid ${colors.primary};
  //border-right: 1px solid ${colors.primary};
`;

const mocks = [
  {
    title: 'on livingroom',
    value: '745',
    ext: <span>W</span>,
    direction: <span>W</span>,
  }
];

export function StatusItem(props) {
  debugger;
  console.log(props);
  const { title = '', value = '', ext, direction } = props.item;

  return (
    <Flex
      flexDirection="row"
      paddingLeft={58}
      paddingRight={58}
      borderLeft={`1px solid ${colors.primary}`}
      borderRight={`1px solid ${colors.primary}`}
    >
      <Text
        text="745"
        fontSize={58}
        color={colors.white}
      />
      <Flex
        flexDirection="column"
        justifyContent="space-around"
      >
        {ext}
        {direction}
      </Flex>
    </Flex>
  );
}

export function Status() {
  return (
    <Container>
      <Text
        text="on livingroom"
        fontSize={16}
        color={colors.white}
        style={{
          textTransform: 'uppercase',
          textAlign: 'center'
        }}
      />
      {mocks.reduce((acc, item) => {
        acc.push(<StatusItem item={item} />);
        return acc;
      }, [])}
    </Container>
  );
}