import styled from "styled-components";
import { StyledShadow } from "../../lib/styles";

export const PlayBtn = styled.button`
  color: var(--color-dark-to-neutral);
  background-color: var(--color-neutral-to-dark);
  width: 17rem;
  height: 17rem;
  border-radius: 100vh;
  margin: 0.7rem 0;
  font-size: 7rem;
  z-index: 10;
  ${StyledShadow}
`;
