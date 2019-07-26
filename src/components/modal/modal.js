import React from 'react';
import ReactModal from 'react-modal';
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

import colors from '../../constants/colors';
import Button from '../button/button';
import FlexBox from '../shared/flex-box';

const SmartHouseModalHeader = styled.div`
  ${color};
  ${typography};
  padding-left: 16px;
  padding-right: 16px;
`;
const SmartHouseModalTitle = styled.div`
  //color: green;
  ${color};
`;
const SmartHouseModalContent = styled.div``;
const SmartHouseModalFooter = styled(FlexBox)`
  & > button {
    &:first-child {
      margin-left: 0;
    }
    
    margin-right: 8px;
    margin-left: 8px;    
    
    &:last-child {
      margin-right: 0;
    }
  }
`;
const SmartHouseActionSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const SmartHouseModalCloseBtn = styled.button`
  background: ${colors.secondary2};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: none;
`;

export function SmartHouseModal(props) {
  const { showModal, handleCloseModal, title, children, confirmText, onConfirm } = props;

  return (
    <ReactModal
      isOpen={showModal}
      style={{
        overlay: {
          backgroundColor: `${hexToRgba('#000000', 0.30)}`,
        },
        content: {
          border: 'none',
          color: `${colors.blue}`,
          backgroundColor: `${colors.secondary}`,
          padding: '8px',
          width: '977px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <FlexBox
        justifyContent="flex-end"
      >
        <SmartHouseModalCloseBtn onClick={handleCloseModal}>X</SmartHouseModalCloseBtn>
      </FlexBox>
      <SmartHouseModalHeader>
        <SmartHouseModalTitle
          color={colors.white}
        >{title}</SmartHouseModalTitle>
      </SmartHouseModalHeader>
      <SmartHouseModalContent>
        {children}
      </SmartHouseModalContent>
      <SmartHouseModalFooter
        justifyContent="flex-end"
        padding="16px"
      >
        <Button
          text="Cancel"
          isTransparent
          onClick={handleCloseModal}
        />
        <Button
          text={confirmText}
          onClick={onConfirm}
        />
      </SmartHouseModalFooter>
    </ReactModal>
  );
}
