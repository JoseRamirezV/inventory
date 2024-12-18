import { createContext, useReducer } from 'react';

interface Children {
  children: React.ReactNode;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  phone: string;
  isLogged: boolean;
  login: (user: User) => void;
  logout: () => void;
}

type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

const InitialState = {
  _id: '',
  email: '',
  name: '',
  phone: '',
  isLogged: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_user: User) => {},
  logout: () => {},
};

export const AuthContext = createContext(InitialState);

function reducer(state: User, action: Action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.payload };
    case 'LOGOUT':
      return {...InitialState};
    default:
      return state;
  }
}

export function AuthContextProvider({ children }: Children) {
  const [state, dispatch] = useReducer(reducer, InitialState);

  function login(userSession: User) {
    dispatch({
      type: 'LOGIN',
      payload: userSession,
    });
  }

  function logout() {
    window.localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
