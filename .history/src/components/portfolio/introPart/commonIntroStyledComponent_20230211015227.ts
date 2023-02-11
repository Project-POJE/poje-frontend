import styled from 'styled-components';

export const Intro = styled.section<{ imgUrl: string }>`
  position: relative;
  padding: 10rem 6rem 6rem 6rem;
  & :hover ::before {
    background-color: white;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url(imgUrl);
    background-size: cover;
    background-position: center;
    background: black;
    filter: brightness(0.5);
    z-index: -1;
  }
`;
