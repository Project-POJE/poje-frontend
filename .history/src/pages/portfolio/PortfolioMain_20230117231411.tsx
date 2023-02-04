import React from 'react';
import styled from 'styled-components';
const BAKCGROUND_IMAGE = `${process.env.PUBLIC_URL}/public_assets/portfolioBackground.jpg`;
export default function PortfolioMain() {
  return (
    <Container>
      <AboutMe imgUrl={BAKCGROUND_IMAGE}>
        <PortfolioSectionContainer>
          <h3>- 유명수 -</h3>
          <h3>장고 개발자 포트폴리오</h3>
          <hr />
          <p>
            안녕하세요. <br /> 이세계에서는 장고 개발자가 된 유명수입니다.{' '}
            <br /> 현재 구골에 다니고 있으며 67세입니다.
          </p>
        </PortfolioSectionContainer>
      </AboutMe>
    </Container>
  );
}

const Container = styled.main``;

const AboutMe = styled.section<{ imgUrl: string }>`
  position: relative;
  padding: 4rem 2rem 2rem 2rem;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url(${BAKCGROUND_IMAGE});
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: -1;
  }
`;

const PortfolioSectionContainer = styled.section``;