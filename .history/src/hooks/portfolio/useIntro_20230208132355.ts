import { useMutation, useQuery } from '@tanstack/react-query';
export default function useIntro({ id }: { id: number }) {
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(['portfolio', '1'], () => console.log('api'));

  const test = useMutation(() => {
    console.log(123);
  });

  return '123';
}
