/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Divisor = styled.div`
  ${({ bg, height }) => css`
    width: 100%;
    background-color: ${bg};
    height: ${height};
    margin: 20px 0 !important;
  `}
`;
