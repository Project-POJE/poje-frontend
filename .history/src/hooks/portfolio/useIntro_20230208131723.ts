import { useMutation, useQuery } from '@tanstack/react-query';
export default function useIntro({ id }: { id: number }) {
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(['portfolio', '1'], () => console.log('api'));

  const { mutate } = useMutation<
    void,
    unknown,
    { title: string; description: string },
    unknown
  >(() => {
		return void;
  });

  return '123';
}
