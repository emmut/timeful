import styled from "styled-components";
import { StyledShadow } from "../../lib/styles";

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-neutral);
  border-radius: 100vh;
  width: 3rem;
  height: 3rem;
  z-index: 10;
  ${StyledShadow};
`;
