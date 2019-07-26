import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { colors } from '../../constants';

const StyledContainer = styled.div`
  background-color: ${colors.primary};
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 49px;
  border-radius: 4px;
`;

const StyledItem = styled.div`
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

const StyledLabel = styled.label`
  height: 100%;
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
    const value = get(event, 'target.value', null);

    this.setState(
      {
        currentValue: value
      },
      () => {
        onChange(value);
      }
    );
  };

  static getDerivedStateFromProps(props) {
    const { reset } = props;

    if (reset === true) {
      return {
        currentValue: null
      };
    }

    return null;
  }

  render() {
    const { currentValue } = this.state;
    const { items, name } = this.props;

    return (
      <StyledContainer>
        {items.map(item => {
          return (
            <StyledItem data-selected={currentValue === item.value} key={item.id}>
              <StyledLabel htmlFor={item.id}>{item.value}</StyledLabel>
              <input
                style={{
                  display: 'none'
                }}
                onChange={this.onChange}
                name={name}
                type="radio"
                id={item.id}
                value={item.value}
                checked={currentValue === item.value}
              />
            </StyledItem>
          );
        })}
      </StyledContainer>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  reset: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  onChange: () => {},
};

export default Filter;
