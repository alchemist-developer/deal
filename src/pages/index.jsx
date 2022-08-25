import styled from "styled-components";

const Heading = styled.h1`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Home() {
  return (
    <div>
      <Heading>Hello AutoForce</Heading>
    </div>
  );
}
