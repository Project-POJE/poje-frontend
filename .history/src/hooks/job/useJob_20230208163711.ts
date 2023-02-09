import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJobCategory() {
  const { data: catetefory } = useQuery(
    ['catefory'],
    async () => {
      return service.job.getJobCategory().data;
    },
    {
      suspense: true,
    }
  );
  return { catetefory };
}
