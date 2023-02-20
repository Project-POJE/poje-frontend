import { useState } from 'react';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { SkillListType } from './PortfolioSkillsContainer';
import PortfolioSkills from './PortfolioSkills';
import useSkillsModify from '@src/hooks/portfolio/skills/useSkillsModify';
import { SkillItemType, SkillsType } from '@src/service/types/portfolio';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import { useRecoilState } from 'recoil';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import useSkills from '@src/hooks/portfolio/skills/useSkills';

export default function PortfolioSkillsModifyMode() {
  const {
    copiedSkills: modifySkillList,
    setCopiedSkills: setModifySkillList,
    handleAddSkillToCopiedSkills: handleAddSkill,
    handleSkillFromCopiedSkills: handleSkillIconDelete,
    handleSubmit,
  } = useSkillsModify();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );
  const { isLoading } = useSkills();
  //const [modifySkillList, setModifySkillList] = useState([...skillList]);

  return (
    <>
      <PortfolioSkills
        skillList={modifySkillList}
        handleSkillIconDelete={handleSkillIconDelete}
      />
      <PortfolioSkillAddPalette
        onModifyMode={() => {
          setIsModifyMode(false);
        }}
        handleAddSkill={handleAddSkill}
        modifySkillList={modifySkillList}
      />
      <ModifyComfirmAndCancleGroup
        isModifyMode={isModifyMode}
        setIsModifyMode={setIsModifyMode}
        handleSubmit={() => {
          handleSubmit();
        }}
      />
    </>
  );
}
