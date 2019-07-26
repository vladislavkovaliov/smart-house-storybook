import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import FlexBox from '../shared/flex-box';
import Switch from '../switch/switch';
import theme from '../../constants/themes';

import { Text } from './styled';

export function PageSettingOption(props) {
  const { onChange, id, title, text } = props;

  return (
    <FlexBox
      flexDirection="column"
      flexGrow={1}
    >
      <Text
        marginBottom="16px"
        color={theme.color.white}
      >{title}</Text>
      <FlexBox
        alignItems="center"
      >
        <FlexBox
          flexGrow={1}
          marginRight="8px"
          alignItems="center"
        >
          <Text
            color={theme.color.secondary2}
          >{text}</Text>
        </FlexBox>
        <Switch id={id} onChange={onChange} />
      </FlexBox>
    </FlexBox>
  );
}
