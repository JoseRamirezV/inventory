import { Product } from '@/interfaces/product';
import { BiPencil } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';

interface Props {
  products: Product[];
  handleUpdate: (product: Product) => void;
  handleDelete: (id: string) => void;
}

export function ProductList({ products, handleUpdate, handleDelete }: Props) {
  return (
    <table className='w-full table-fixed pb-10'>
      <thead>
        <tr className='border-b border-b-neutral-400/80 [&>*]:font-medium [&>*]:ps-2'>
          <th className='w-[5%]'>#</th>
          <th className='w-[20%]'>Producto</th>
          <th className='w-[40%]'>Descripción</th>
          <th className='w-[15%]'>Cantidad</th>
          <th className='w-[10%]'>Precio</th>
          <th className='w-[10%]'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          products.map((product, i) => (
            <tr
              key={product._id}
              className='[&>*]:py-2 [&>*]:ps-2 border-b [&>*]:text-center w-full'
            >
              <td>{i + 1}</td>
              <td>{product.item}</td>
              <td>
                <p className='line-clamp-1'>{product.description}</p>
              </td>
              <td>{product.inStock}</td>
              <td>$ {new Intl.NumberFormat('en-IN').format(Number(product.price))}</td>
              <td className='flex justify-center gap-2'>
                <button
                  className='p-1.5 bg-orange-500 rounded-md text-white hover:bg-orange-600 transition-colors'
                  onClick={() => handleUpdate(product)}
                >
                  <BiPencil className='size-5' />
                </button>
                <button
                  className='p-1.5 bg-red-500 rounded-md text-white hover:bg-red-600 transition-colors'
                  onClick={() => handleDelete(product._id!)}
                >
                  <MdDeleteOutline className='size-5' />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
