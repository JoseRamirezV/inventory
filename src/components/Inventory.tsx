import { useProducts } from '@/hooks/useProducts';
import { BiPencil } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

export default function Inventory() {
  const { products } = useProducts();

  return (
    <div className='flex flex-col size-full p-10 text-slate-700'>
      <header className='flex justify-between px-5 py-1'>
        <h2 className='text-2xl'>Inventario</h2>
        <ul className='flex gap-2'>
          <li>
            <button className='px-3 py-1 bg-red-500 rounded-md text-white hidden items-center gap-1'>
              <MdDeleteOutline className='size-5' />
              <span className='pe-1'>Borrar</span>
            </button>
          </li>
          <li>
            <button className='px-3 py-1 bg-blue-500 rounded-md text-white flex items-center gap-1'>
              <IoMdAdd className='size-5' />
              <span className='pe-1'>Agregar</span>
            </button>
          </li>
        </ul>
      </header>
      <main className='h-full mt-5'>
        <table className='w-full table-auto pb-10'>
          <thead>
            <tr className='border-b border-b-neutral-400/80 [&>*]:font-medium [&>*]:ps-2'>
              <th>#</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map(
                ({ _id, item, description, price, inStock  }, i) => (
                  <tr
                    key={_id}
                    className='[&>*]:py-2 [&>*]:ps-2 border-b [&>*]:text-center'
                  >
                    <td>{i+1}</td>
                    <td>{item}</td>
                    <td className='max-w-96'>
                      <p className='line-clamp-1'>{description}</p>
                    </td>
                    <td>{inStock}</td>
                    <td>$ {price}</td>
                    <td className='flex justify-center gap-2'>
                      <button className='p-1.5 bg-orange-500 rounded-md text-white hover:bg-orange-600 transition-colors'>
                        <BiPencil className='size-5' />
                      </button>
                      <button className='p-1.5 bg-red-500 rounded-md text-white hover:bg-red-600 transition-colors'>
                        <MdDeleteOutline className='size-5' />
                      </button>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
