/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const ButtonTop = styled.a`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 375px;
  margin-bottom: 20px !important;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  @media only screen and (max-width: 1017px) {
    display: none;
  }
`;
