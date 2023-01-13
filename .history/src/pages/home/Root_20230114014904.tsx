import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../../components/common/MainHeader';

export default function Root() {
  const location = useLocation();

  return (
    <>
      <Outlet />
    </>
  );
}
