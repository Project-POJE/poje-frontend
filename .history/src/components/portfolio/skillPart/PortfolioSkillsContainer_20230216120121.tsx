import PortfolioSkills from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import { Suspense, useState } from 'react';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import PortfolioViewMode from './PortfolioViewMode';

export type SkillListType = {
  type: SkillIconType;
  skills: SkillIconSetType[];
};

export default function PortfolioSkillsContainer() {
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );
  const [skillList, setSkillList] = useState<SkillListType[]>([]);
  //[{type:'frontend, skills:[{name:react, path:'123'}]}, ]

  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <Content>
        <Suspense fallback={<div>로딩중</div>}>
          {!isModifyMode && <PortfolioViewMode />}
          {isModifyMode && <PortfolioSkillsModifyMode skillList={skillList} />}
        </Suspense>
      </Content>
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(true)}
      />
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  position: relative;
  background: ${({ theme }) => theme.colorPink};

  .skillsContainer {
    display: flex;
    width: auto;
    gap: 0.8rem;
    margin-top: 0.8rem;
    max-width: 1600px;
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
