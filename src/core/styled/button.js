import styled from "styled-components";
import { colors } from "../../constants";

export const padding = 16;
export const height = 33;

export default styled.button`
  color: ${colors.white};
  border: none;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  height: ${height}px;
  padding-right: ${padding}px;
  padding-left: ${padding}px;
`;
