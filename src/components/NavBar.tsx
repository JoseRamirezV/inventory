import { AiFillNotification, AiOutlineLogout } from 'react-icons/ai';

export default function NavBar() {
  return (
    <header className='bg-slate-700 ps-8 pr-10'>
      <nav className='flex items-center justify-between h-16'>
        <span>Logo</span>
        <ul className='flex gap-5'>
          <li>
            <AiFillNotification className='size-5' />
          </li>
          <li className='group size-5'>
            <button className='group-hover:text-red-500 transition-colors'>
              <AiOutlineLogout className='size-5' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
