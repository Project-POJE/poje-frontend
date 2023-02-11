import styled from 'styled-components';

export default function LoadingSpiner({ text }: { text: string }) {
  return (
    <Container>
      <LoadingSpin />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

const LoadingSpin = styled.div`
  width: 4rem;
  height: 4rem;
  background: white;
`;

const Text = styled.p``;
