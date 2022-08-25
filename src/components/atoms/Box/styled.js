/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ bg, width }) => css`
    background-color: ${bg};
    width: ${width}
    }
  `};
`;
