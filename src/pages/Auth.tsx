import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

export default function Auth() {
  return (
    <div className='grid place-content-center size-full bg-slate-100'>
      <Outlet />
      <Toaster richColors/>
    </div>
  );
}
