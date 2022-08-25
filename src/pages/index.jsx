/* eslint-disable prettier/prettier */
import styled from "styled-components";
import Box from "../components/atoms/Box";
import Typography from "../components/atoms/Typography";

const Heading = styled.h1`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Home() {
  return (
    <div>
      <Box>
        <Box bg="red">
          <h1>oioioioioioioi</h1>
        </Box>
      </Box>
      <Heading>Hello AutoForce</Heading>
      <Typography text="props render" />
    </div>
  );
}
