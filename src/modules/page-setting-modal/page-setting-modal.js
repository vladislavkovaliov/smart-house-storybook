import React from 'react';
import styled from 'styled-components';
import FlexBox from "../../components/shared/flex-box";
import Filter from "../../components/filter/filter";
import colors from '../../constants/colors';
import { SmartHouseModal } from '../../components/modal/modal';
import { PageSettingOption } from '../../components/page-setting-option/page-setting-option';

const baseStyles = `
  flex-direction: column;
  flex-basis: 50%;

  & > div {
    &:first-child {
      margin-top: 0;
    }

    margin-top: 8px;
    margin-bottom: 8px;

    &:last-child {
      margin-top: 0;
    }
  }
`;

const LeftSide = styled(FlexBox)`
  ${baseStyles};
  border-right: 1px solid ${colors.primary};
  padding-right: 64px;

`;
const RightSide = styled(FlexBox)`
  ${baseStyles};
  padding-left: 64px;
`;

export class PageSettingModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        value: 'sections',
      },
      items: [
        {
          id: 'camera',
          title: 'Camera',
          text: 'Receive daily email notification any time.',
          state: false,
        },
        {
          id: 'devices-limit',
          title: 'Devices limit',
          text: 'Receive daily email notification any time.',
          state: false,
        },
        {
          id: 'status-by-unit',
          title: 'Status by unit',
          text: 'Receive daily email notification any time.',
          state: false,
        }
      ],
    };
  }

  onFilter = (value) => {
    this.setState( {
      filter: {
        value,
      },
    });
  };

  onConfirm = (event) => {
    console.log(event);
    this.props.onConfirm(this.state);
    this.props.handleCloseModal(event);
  };

  onClose = (event) => {
    this.props.onClose(this.state);
    this.props.handleCloseModal(event);
  };

  onSettingItemChange = (event) => {
    const { checked, id } = event.target;

    this.setState(prevState => {
      const items = prevState
        .items
        .map(i => {
          if (i.id === id) {
            i.state = checked;
          }

          return i;
        });

      return Object.assign(
        {},
        { ...prevState },
        { items }
        );
    });
  };

  render () {
    const { showModal } = this.props;
    const { filter, items } = this.state;

    return (
      <SmartHouseModal
        showModal={showModal}
        handleCloseModal={this.onClose}
        title="Overview Page Setting"
        confirmText="Save"
        onConfirm={this.onConfirm}
      >
        <FlexBox
          justifyContent="center"
          marginTop="48px"
          marginBottom="48px"
        >
          <Filter
            items={[
              {
                id: 'sections',
                value: 'sections',
              },
              {
                id: 'layout',
                value: 'layout',
              },
              {
                id: 'options',
                value: 'options',
              }
            ]}
            name="page-setting"
            defaultValue={filter.value}
            onChange={this.onFilter}
          />
        </FlexBox>
        <FlexBox
          marginTop="48px"
          marginBottom="48px"
          paddingLeft="16px"
          paddingRight="16px"
        >
          <LeftSide>
            {items
              .slice(0, Math.floor(items.length / 2))
              .map(item => (
                <PageSettingOption
                  id={item.id}
                  title={item.title}
                  text={item.text}
                  onChange={this.onSettingItemChange}
                />
              ))}
          </LeftSide>
          <RightSide>
            {items
              .slice(Math.floor(items.length / 2))
              .map(item => (
                <PageSettingOption
                  id={item.id}
                  title={item.title}
                  text={item.text}
                  onChange={this.onSettingItemChange}
                />
              ))}
          </RightSide>
        </FlexBox>
      </SmartHouseModal>
    );
  }
}