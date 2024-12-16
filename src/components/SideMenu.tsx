import { Link } from "react-router";

export default function SideMenu() {
  return (
    <aside className='w-64 bg-slate-100'>
      <ul className='capitalize text-slate-700 font-medium'>
        <li>
          <Link className="block py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors" to="/">Dashboard</Link>
        </li>
        <li>
          <Link className="block py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors" to="/option">option</Link>
        </li>
        <li>
          <Link className="block py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors" to="/option">option</Link>
        </li>
        <li>
          <Link className="block py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors" to="/option">option</Link>
        </li>
      </ul>
    </aside>
  );
}
