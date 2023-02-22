import styled, { keyframes } from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1></EmptyDiv1>
      <EmptyDiv2></EmptyDiv2>
    </Container>
  );
}

const Container = styled.div`
  padding: 8rem 4rem;
  background: black;
`;

const EmptyDiv1 = styled.div`
  width: 100%;
  height: 50px;
  background: #ddd;
  margin: 0 auto;
  border-radius: 1rem;
`;

const EmptyDiv2 = styled.div`
  width: 80%;
  height: 100px;
  background: #ddd;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 1rem;
`;

const ShimmerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;
`;

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;

const ShimmerAni = keyframes`
0% {
		transform: translateX(-150%);
	}
	50% {
		transform: translateX(-60%);
	}
	100% {
		transform: translate(150%);
	}`;
