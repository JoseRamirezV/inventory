import Dashboard from '@/pages/Dashboard';
import { HashRouter, Navigate, Route, Routes } from 'react-router';
import Inventory from './components/Inventory';
import Auth from '@/pages/Auth';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
// import Guard from '@/utils/Guard';
import { AuthContextProvider } from './context/AuthContext';
import Profile from '@/pages/Profile';

function App() {
  return (
    <>
      <HashRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Navigate to={'auth'} />} />
            {/* <Route element={<Guard />}> */}
            <Route path='/auth' element={<Auth />}>
              <Route index element={<Login />} />
              <Route path='signup' element={<SignUp />} />
            </Route>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<Inventory />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            {/* </Route> */}
          </Routes>
        </AuthContextProvider>
      </HashRouter>
    </>
  );
}

export default App;
