import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { width } from 'styled-system';

import colors from '../../constants/colors';

const StyledInput = styled.input`
  width: 100%;
  height: 32px;

  background-color: ${colors.primary} !important;
  box-sizing: border-box;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${props => props.theme.border};

  color: ${props => props.theme.border};

  padding-left: 4px;
  padding-right: 4px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:valid {
    -webkit-text-fill-color: red !important;
  }
`;

const StyledLabel = styled.label`
  font-size: 23px;
  font-weight: 300;
  font-family: Roboto;
  color: ${colors.white};
`;

const InputContainer = styled.div`
  ${width};
`;

class Input extends React.Component {
  state = {
    value: '',
    theme: {
      border: `${colors.blue}`
    }
  };

  _onChange = event => {
    const { value } = event.target;
    const { onChange } = this.props;

    this.setState({ value });

    onChange(event);
  };

  static getDerivedStateFromProps(props) {
    const { valid } = props;

    if (valid === null) {
      return {
        valid,
        theme: {
          border: `${colors.blue}`
        }
      };
    }

    return {
      valid,
      theme: {
        border: `${valid ? colors.green : colors.red}`
      }
    };
  }

  render() {
    const { value, theme } = this.state;
    const { name, type, labelText, width, ...restProps } = this.props;

    return (
      <InputContainer
        maxWidth={width}
      >
        {labelText && <StyledLabel>{labelText}</StyledLabel>}
        <ThemeProvider theme={theme}>
          <StyledInput
            value={value}
            onChange={this._onChange}
            name={name}
            type={type}
            {...restProps}
        />
        </ThemeProvider>
      </InputContainer>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  name: '',
  type: 'text',
  labelText: '',
  width: '327px',
};

export default Input;
