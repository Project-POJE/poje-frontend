import styled from 'styled-components';
import { breakPoint } from '../../../styledComponents/media';
import { SkillIconSetType } from '../../../util/skillicons';

interface PortfolioSkillItemType {
  skillType: string;
  skillList: SkillIconSetType[];
}

const ICON_PATH = `${process.env.PUBLIC_URL}/public_assets/skill_icon/`;

export default function PortfolioSkillItem({
  skillType, skillList
}: PortfolioSkillItemType) {
  return (
    <SkillsStack>
      <SkillsTitle>{skill.name}</SkillsTitle>
      <SkillList>
        {skill..map((path) => (
          <SkillItem src={'/static/media/js_icon.60dbbe1569571db1eda7.png'} />
        ))}
      </SkillList>
    </SkillsStack>
  );
}

const SkillsStack = styled.div`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 1rem 1.4rem;
  position: relative;
  box-shadow: 1px 1px 3px black;
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: ${breakPoint.mmm}) {
    font-size: ${({ theme }) => theme.fontMiddleSize};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.img`
  display: flex;
  width: 50%;
  margin-bottom: 0.6rem;

  aspect-ratio: auto;
`;
