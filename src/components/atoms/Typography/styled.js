/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Typography = styled.p`
    font-size: ${({theme}) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.blackColor};
`;
