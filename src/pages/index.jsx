import styled from "styled-components";
import Box from "../components/atoms/Box";

const Heading = styled.h1`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Home() {
  return (
    <div>
      <Box>
        <Box>
          <h1>oioioioioioioi</h1>
        </Box>
      </Box>
      <Heading>Hello AutoForce</Heading>
    </div>
  );
}
