import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export default function Profile() {
  const { email, phone, name } = useContext(AuthContext);
  return (
    <div className='size-full p-5 text-gray-700 space-y-5'>
      <div className='flex gap-10'>
        <span className='flex flex-col'>
          <legend className='font-bold'>Nombre</legend>
          <p>{name}</p>
        </span>
        <span className='flex flex-col'>
          <legend className='font-bold'>Email</legend>
          <p>{email}</p>
        </span>
      </div>
      <span className='flex flex-col'>
        <legend className='font-bold'>Teléfono</legend>
        <p>{phone}</p>
      </span>
    </div>
  );
}
