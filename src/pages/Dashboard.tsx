import NavBar from '@/components/NavBar';
import SideMenu from '@/components/SideMenu';
import { Outlet } from 'react-router';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <main className='flex h-full'>
        <SideMenu/>
        <Outlet />
      </main>
    </>
  );
}
