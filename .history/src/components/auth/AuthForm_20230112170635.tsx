import styled from 'styled-components';

export default function AuthForm() {
  return <Container></Container>;
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  width: 100%;
`;
