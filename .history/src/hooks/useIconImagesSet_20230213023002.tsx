import { SkillsType } from '@src/service/types/portfolio';
import { useEffect, useMemo, useState } from 'react';
import { SkillListType } from '../components/portfolio/skillPart/PortfolioSkillsContainer';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
  SkillIconSetType,
  SkillIconType,
} from '../util/skillicons';

export default function useIconImagesSet(modifySkillList: SkillsType[]) {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);

  //frontend, backend... 각 기술 타입
  const iconTypes = Object.keys(iconsList) as IconListKeyType[];
  const [icons, setIcons] = useState<IconListType>({ ...iconsList });

  const deleteUsedIcon = ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => {
    setIcons((list) => {
      let targetSet = [...list[selectedType]];
      targetSet = targetSet.filter((i) => i.name !== item.name);
      return { ...list, [selectedType]: [...targetSet] };
    });
  };

  useEffect(() => {
    setIcons({ ...iconsList });
  }, [modifySkillList, iconsList]);

  return { iconTypes, icons, deleteUsedIcon };
}
