import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
import useUser from '../auth/useUser';

export default function useMyInfo() {
  const { user } = useUser();
  const { data: userInfo, isLoading } = useQuery(
    ['myInfo', user],
    async () => {
      return await service.member.getMemberInfo();
    },
    {
      enabled: !!user,
    }
  );
  return { userInfo, isLoading };
}
