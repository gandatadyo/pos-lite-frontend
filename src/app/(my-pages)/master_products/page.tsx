'use client'

// import Sidebar from '@/app/components/Sidebar';
import { useState } from 'react';

const data_master_product = [
    {
      "id": 1,
      "name": "Produk A",
      "category": "Elektronik",
      "price": 1500000,
      "stock": 100,
      "division": "Semua"
    },
    {
      "id": 2,
      "name": "Produk B",
      "category": "Fashion",
      "price": 250000,
      "stock": 50,
      "division": "Divisi 1"
    },
    {
      "id": 3,
      "name": "Produk C",
      "category": "Elektronik",
      "price": 3000000,
      "stock": 30,
      "division": "Divisi 2"
    },
    {
      "id": 4,
      "name": "Produk D",
      "category": "Otomotif",
      "price": 500000,
      "stock": 20,
      "division": "Semua"
    },
    {
      "id": 5,
      "name": "Produk E",
      "category": "Makanan & Minuman",
      "price": 50000,
      "stock": 200,
      "division": "Divisi 1"
    }
  ]


export default function Home({ params }: { params: { name: string } }) {
  console.log(params);

  const [state,setState] = useState("hello")

  return (
    <div>
      {/* <Sidebar> */}
        <div>
        

          <div className='m-[50px]'>

            <h1 className='text-xl'>Master Product</h1>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name Product</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Category</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Desscription</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                  {data_master_product.map((item,index)=>{
                    return (
                      <tr className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.category}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.division}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.division}</td>
                      </tr>
                    )
                  })}
                
                </tbody>
              </table>
            </div>

          </div>

        </div>
      {/* </Sidebar> */}
    </div>
  );
}
