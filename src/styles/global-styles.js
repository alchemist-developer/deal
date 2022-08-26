/* eslint-disable prettier/prettier */
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0 !important;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
    cursor: pointer;
  }

.spanFooter {
  margin-right: 10px !important;
}

  u {
    cursor: pointer;
  }
`;
