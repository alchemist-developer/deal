/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Button = styled.a`
  ${({ bg, margin, padding, width }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: ${width};
    height: 40px;
    border-radius: 50px;
    color: white;
    background-color: ${({ theme }) => theme.colors.tertiaryColor};
    margin: ${margin};
    padding: ${padding};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  `}
`;
