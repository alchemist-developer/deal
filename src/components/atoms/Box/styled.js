import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ background, width }) => css`
    background-color: ${background};
    width: ${width}
    }
  `};
`;
