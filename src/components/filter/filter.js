import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { colors } from '../../constants';
import { Container, Display } from "../../core/styled";

export const FilterContainer = styled(Container)`
  background-color: ${colors.primary};
  display: inline-flex;
  align-items: center;
  height: 50px;
  border-radius: 4px;
`;

export const Item = styled(Display)`
  height: calc(100% - 6px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  border-radius: 4px;
  min-width: 70px;

  &[data-selected='true'] {
    background-color: ${colors.blue};
  }
`;

export const Label = styled.label`
  height: 100%;
  cursor: pointer;
  color: ${colors.white};
  text-transform: uppercase;
  padding: 0 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;

class Filter extends React.Component {
  state = {
    currentValue: this.props.defaultValue,
  };

  onChange = event => {
    const { onChange } = this.props;
    const id = get(event, 'target.id', null);

    this.setState(
      {
        currentValue: id
      },
      () => {
        onChange(id);
      }
    );
  };

  render() {
    const { currentValue } = this.state;
    const { items, name } = this.props;

    return (
      <FilterContainer>
        {items.map(item => {
          return (
            <Item data-selected={currentValue === item.value} key={item.id}>
              <Label htmlFor={item.id}>{item.value}</Label>
              <Display display="none">
                <input
                  onChange={this.onChange}
                  name={name}
                  type="radio"
                  id={item.id}
                  value={item.value}
                  checked={currentValue === item.value}
                />
              </Display>
            </Item>
          );
        })}
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    }).isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Filter;
