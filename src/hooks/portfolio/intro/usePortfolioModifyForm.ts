import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import usePortfolioIntro from './usePortfolioIntro';
import { PortfolioIntroType } from '@src/service/types/portfolio';
import { useQueryClient } from '@tanstack/react-query';
import { queryKey } from '@src/react-query/queryKey';

export type CopiedPfIntroType = Omit<
  PortfolioIntroType,
  'likeStatus' | 'likeCount'
> & {
  backgroundImgFile: File | null;
};

type Props = {
  portfolioId: string;
};

export default function usePortfolioModifyForm({ portfolioId }: Props) {
  const queryClient = useQueryClient();
  const { updateIntro } = usePortfolioIntro();
  const [copiedPfIntro, setCopiedPfIntro] = useState<CopiedPfIntroType>({
    title: '',
    description: '',
    portfolioId: '',
    jobName: '',
    backgroundImg: '',
    backgroundImgFile: null,
  });
  const discriptionRef = useRef<HTMLTextAreaElement>(null);

  const onChangeInputEl = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let files: FileList;

    if (e.target instanceof HTMLInputElement && e.target.files) {
      files = e.target.files;
    }

    switch (name) {
      case 'title':
        setCopiedPfIntro((p) => ({
          ...p,
          title: value,
        }));
        return;
      case 'file':
        const file = files![0];
        const backgroundImg = URL.createObjectURL(file);
        return setCopiedPfIntro((p) => ({
          ...p,
          backgroundImg,
          backgroundImgFile: file,
        }));
      case 'description':
        resizeAutoTextArea();
        setCopiedPfIntro((p) => ({ ...p, description: e.target.value }));
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, portfolioId, backgroundImgFile } =
      copiedPfIntro;
    updateIntro({ title, description, portfolioId, backgroundImgFile });
  };

  const resizeAutoTextArea = () => {
    if (discriptionRef.current) {
      discriptionRef.current.style.height = 'auto';
      discriptionRef.current.style.height = `${discriptionRef.current.scrollHeight}px`;
    }
  };

  useLayoutEffect(() => {
    const data = queryClient.getQueryData<PortfolioIntroType>([
      queryKey.portfolioIntro,
      portfolioId,
    ]);
    setCopiedPfIntro((e) => ({ ...data!, backgroundImgFile: null }));
  }, []);

  // textarea 자동 크기 증가
  useEffect(() => {
    resizeAutoTextArea();
  }, [discriptionRef.current]);

  //컴포넌트 unMount시 URL.Object헤제
  useEffect(() => {
    return () => {
      copiedPfIntro.backgroundImgFile &&
        URL.revokeObjectURL(copiedPfIntro.backgroundImg);
    };
  }, []);

  return {
    copiedPfIntro,
    onChangeInputEl,
    discriptionRef,
    handleSubmit,
  };
}
