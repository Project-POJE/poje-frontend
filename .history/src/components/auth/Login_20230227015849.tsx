import { useLocation } from 'react-router-dom';
import AuthFormTemplate from './AuthFormTemplate';


export default function Login() {
  const { pathname } = useLocation();

  return <AuthFormTemplate path={pathname.split('/')[2]} />;
}
