import React from "react";
import { Button as StyledButton } from "../../styled";

export function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
}

export default Button;
