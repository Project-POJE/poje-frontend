import { AiFillTag } from 'react-icons/ai';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { Sizes } from '../../styledComponents/media';
import { front } from '../svgs/Test1';
import * as S from './styledComponents';

const ICON_PATH = `${process.env.PUBLIC_URL}/public_assets/skill_icon/`;

export default function PortfolioSkills() {
  const skillItems = ['css_icon.png', 'html_icon.png'];
  const skillItems2 = [
    'css_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
  ];
  console.log(front);
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <Masonry
        breakpointCols={{ [Sizes.mm]: 5 }}
        className='skillsContainer'
        columnClassName='skillsStack'
      >
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>

          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems2.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
      </Masonry>
      {/* <SkillsContainer>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>

          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems2.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
      </SkillsContainer> */}
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

const SkillsStack = styled.div`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 1px 1px 3px black;
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
`;

const SkillList = styled.div``;

const SkillItem = styled.img`
  width: 100%;
  aspect-ratio: auto;
`;
