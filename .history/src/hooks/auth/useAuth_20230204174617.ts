import { useNavigate } from 'react-router-dom';
import LocalStorage from '@src/db/localStorage';
import service from '@src/service';
import { JoinRequest, LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';

export default function useAuth() {
  const navigate = useNavigate();
  const login = useMutation(
    (data: LoginRequest) => {
      return service.auth.login(data);
    },
    {
      onSuccess: (data) => {
        const token = data.headers.authorization.split(' ')[1];
        const localStorage = new LocalStorage();
        localStorage.set('TOKEN', token);
      },
    }
  );

  const join = useMutation(
    (data: JoinRequest) => {
      return service.auth.join(data);
    },
    {
      onSuccess: (data) => {
        navigate('/auth/login');
      },
    }
  );
  return { login };
}
