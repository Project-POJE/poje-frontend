import { isDisapperIntro } from '@src/store/portfolio/header';
import { breakPoint } from '@src/styledComponents/media';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

export default function PortfolioHeader() {
  const navigate = useNavigate();
  const isIntroDisapper = useRecoilValue(isDisapperIntro);
  return (
    <Container isIntroDisapper={isIntroDisapper}>
      <Title
        isIntroDisapper={isIntroDisapper}
        onClick={() => {
          navigate('/job');
        }}
      >
        Poje
      </Title>
      <Navbar>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#intro'
          onClick={moverToPart}
        >
          Intro
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#aboutme'
          onClick={moverToPart}
        >
          About Me
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#skills'
          onClick={moverToPart}
        >
          Skills
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#projects'
          onClick={moverToPart}
        >
          Projects
        </NavbarItem>
      </Navbar>
        <HamburgerButton>햄버거</HamburgerButton>
    </Container>
  );
}

function moverToPart(e: React.MouseEvent) {
  const target = e.target as HTMLLIElement;
  const targetPart = document.querySelector(`${target.dataset.link}`);
  targetPart?.scrollIntoView({ behavior: 'smooth' });
}

const Container = styled.header<{ isIntroDisapper: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColorToneDown};
  background: transparent;
  z-index: 100;
  transition: all 0.3s ease-in;

  ${({ isIntroDisapper }) => {
    if (isIntroDisapper) {
      return css`
        background: white;
        color: black;
        box-shadow: 1px 1px 10px #7c7c7c;
      `;
    }
    return css`
      background: transparent;
    `;
  }}
`;

const Title = styled.h1<{ isIntroDisapper: boolean }>`
  font-size: ${({ theme }) => theme.fontLargeSize};
  &:hover {
    color: ${({ isIntroDisapper }) => (isIntroDisapper ? '#7c7c7c' : 'white')};
  }
  cursor: pointer;
`;

const Navbar = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  font-weight: 600;
  gap: 0.8rem;

  @media screen and (max-width:${breakPoint.mm}){
    display:none;
  }
`;

const NavbarItem = styled.li<{ isIntroDisapper: boolean }>`
  &:hover {
    color: ${({ isIntroDisapper }) => (isIntroDisapper ? '#7c7c7c' : 'white')};
  }
  cursor: pointer;
`;

const HamburgerButton = styled.button`
  position:absolute;
  color:white;

`