import { isDisapperIntro } from '@src/store/portfolio/header';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export default function useIntroObserver() {
  const [] = useRecoilState(isDisapperIntro);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ref๋ค๋ก!!');
    let observer;
    if (introRef.current) {
      const optioins = {
        root: introRef.current,
        rootMargin: 0,
        threshold: [0.1, 0.5, 1],
      };

      observer = new IntersectionObserver(() => {
        console.log('์๋'), optioins;
      });
    }
  }, [introRef]);
  return { introRef };
}
