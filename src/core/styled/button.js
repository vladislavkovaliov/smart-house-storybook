import styled from "styled-components";
import PropTypes from 'prop-types';

import { colors } from "../../constants";

export const padding = 16;
export const height = 33;

export const Button =  styled.button`
  color: ${colors.white};
  border: none;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  height: ${height}px;
  padding-right: ${padding}px;
  padding-left: ${padding}px;
  background-color: ${props => props.isTransparent ? 'transparent' : colors.blue};
  max-width: ${props => props.isFluid ? '100%' : 'none'};
  width: ${props => props.isFluid ? '100%' : 'none'};
`;

Button.PropTypes = {
  isFluid: PropTypes.bool.isRequired,
  isTransparent: PropTypes.bool.isRequired,
};

export default Button;
