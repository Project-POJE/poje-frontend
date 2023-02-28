import { PortfolioItemType } from '@src/service/types/jobCard';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';
import ProfileItemRemaster from './ProfileItemRemaster';

type JobPortfolioListType = {
  list: PortfolioItemType[]
}

export default function JobPortfolioList({list}:JobPortfolioListType) {
  return (
    <ProfileList>
      {list.map((item) => (
        <ProfileItemRemaster key={item.portfolioId}{...item} />
      ))}
    </ProfileList>
  );
}

const ProfileList = styled.ul`
  /* background-color: ${({ theme }) => theme.bgColor}; */
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  padding: 0.6rem 0.6rem;
  display: grid;
  grid-auto-rows: 376px;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: center;
  gap: 2rem;
  height:100%;
  overflow: scroll;
  min-height: 0;
  max-width: 1600px;

  

  

  /* @media screen and (max-width: ${breakPoint.m}) {
    grid-template-columns: repeat(2, 320px);
  }

  @media screen and (max-width: ${breakPoint.mmm}) {
    grid-template-columns: repeat(1, 1fr);
  }


  @media screen and (min-width: ${breakPoint.ll}) {
    grid-template-columns: repeat(4, 320px);
  } */

  /* @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${breakPoint.ss}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakPoint.s}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakPoint.mmm}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: ${breakPoint.m}) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: ${breakPoint.l}) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media screen and (min-width: ${breakPoint.ll}) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (min-width: ${breakPoint.lll}) {
    grid-template-columns: repeat(9, 1fr);
  } */
`;