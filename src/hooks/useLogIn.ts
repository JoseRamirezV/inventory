import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { login as loginService, signUp } from '@/services/users.service';

import { toast } from 'sonner';
import { useNavigate } from 'react-router';

export interface NewUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
}

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    return () => {
      setError(null);
    };
  }, [error]);

  const authenticateUser = async (email: string, password: string) => {
    const { userData, error } = await loginService(email, password);
    if (error) {
      setError(error);
      return;
    }
    login({
      ...userData,
      isLogged: true,
    });
    navigate('/dashboard')
  };

  const createUser = async (data: NewUser) => {
    if (data.password2 !== data.password)
      return setError('Las contraseñas no coinciden');
    const { ok, error } = await signUp(data);
    if (!ok) {
      setError(error!);
      return;
    }
    toast.info('Registro exitoso!', {
      onDismiss: () =>
        navigate('/auth', {
          state: { email: data.email },
        }),
      onAutoClose: () =>
        navigate('/auth', {
          state: { email: data.email },
        }),
    });
  };

  return {
    authenticateUser,
    createUser,
  };
}
