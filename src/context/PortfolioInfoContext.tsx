import CommonModal from '@src/components/common/CommonModal';
import useProtfolioModifyPermission from '@src/hooks/portfolio/useProtfolioModifyPermission';
import { createContext, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';

type ContextType = {
  portfolioId: string;
  permissionModify: boolean;
};
const PortfolioInfoContext = createContext<ContextType | undefined>(undefined);

type ContextPropType = {
  children: React.ReactNode;
};

type ParamsType = {
  portfolioId: string;
};

export default function PortfolioInfoContextProvider({
  children,
}: ContextPropType) {
  const { portfolioId } = useParams() as ParamsType;
  const permissionModify = useProtfolioModifyPermission(portfolioId);
  const context = useMemo<ContextType>(
    () => ({ portfolioId, permissionModify }),
    [portfolioId]
  );
  return (
    <PortfolioInfoContext.Provider value={context}>
      <CommonModal />
      {children}
    </PortfolioInfoContext.Provider>
  );
}

export const usePortfolioInfo = () =>
  useContext(PortfolioInfoContext)! as ContextType;
