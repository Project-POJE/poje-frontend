import service from '@src/service';
import {
  GetPortfolioIntroRequest,
  PortfolioIntroType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { useEffect, useState } from 'react';

type CopiedPfIntroType = PortfolioIntroType & {
  backgroundImgFile: File | null;
};

export default function usePortfolioIntro() {
  const [copiedPfIntro, setCopiedPfIntro] = useState<CopiedPfIntroType>({
    title: '',
    description: '',
    portfolioId: '',
    jobName: '',
    backgroundImg: '',
    backgroundImgFile: null,
  });

  const { portfolioId } = usePortfolioInfo();
  //todo 인트로 보내기 가져오기

  //1. suspense 사용시 onSuccess에 setState를 등록하면 업데이트가 안됨 이유는 unmount상태에서 변경했기때문
  const { data } = useQuery(
    ['portfolioIntro', portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    {
      suspense: true,
    }
  );

  const updateIntro = useMutation<
    void,
    unknown,
    { title: string; description: string },
    unknown
  >((data) => {
    console.log(data);
    return Promise.resolve();
  }, {});

  useEffect(() => {
    data && setCopiedPfIntro((e) => ({ ...data, backgroundImgFile: null }));
  }, [data]);

  return {
    pfIntro: data!,
    updateIntro: updateIntro.mutate,
    copiedPfIntro,
    setCopiedPfIntro,
  };
}
