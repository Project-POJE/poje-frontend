import { AiFillTag } from 'react-icons/ai';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { breakPoint, Sizes } from '../../styledComponents/media';
import { front } from '../svgs/Test1';
import PortfolioSkillItem from './PortfolioSkillItem';
import * as S from './styledComponents';

const breakpointColumnsObj = Object.freeze({
  default: 5,
  1400: 4,
  1000: 3,
  700: 2,
  500: 1,
});

export default function PortfolioSkills() {
  const skillItems = ['css_icon.png', 'html_icon.png'];
  const skillItems2 = [
    'css_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
  ];
  const skillTitle = ['test1', 'test2', 'test3', 'test4'];
  console.log(front);
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='skillsContainer'
        columnClassName='skillsStack'
      >
        {skillTitle.map((title) => (
          <PortfolioSkillItem skillTitle={title} skillList={skillItems2} />
        ))}
      </Masonry>
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorPink};

  .skillsContainer {
    display: flex;
    width: auto;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
