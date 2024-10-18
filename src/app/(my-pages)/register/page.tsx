'use client'

import React, { useState } from 'react';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import Link from 'next/link'

export default function Home() {
  const [stateInput, setStateInput] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput({ ...stateInput, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="bg-[#4f46e5]" style={{ height: "100%", position: 'absolute', width: '100%' }}>

      <div className='flex' style={{ height: '100%' }}>
        {/* content */}
        <div className='flex justify-center content-center items-center hidden md:flex md:w-[50%]'>
          <div className='p-[20px]'>
            <h1 className='text-white text-[40px] font-[500]'>APLIKASI MANAJEMEN BISNIS<br />TERBAIK NO 1 DI INDONESIA</h1>
          </div>
        </div>

        {/* form */}
        <div className='flex justify-center content-center items-center md:w-[50%] w-[100%]' style={{ backgroundColor: 'white', height: '100%', }}>

          <div className='w-[400px]' >

            <h1 className='mb-5 text-[40px]'>Register Apps</h1>


            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <Input
              name="email"
              value={stateInput.email}
              onChange={handleInputChange}
              className='mb-3'
              placeholder="Email"
            />

            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>

            <Input
              name="phone"
              value={stateInput.phone}
              onChange={handleInputChange}
              className='mb-3'
              placeholder="Phone"
            />

            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <Input
              name="password"
              value={stateInput.password}
              onChange={handleInputChange}
              className='mb-3'
              placeholder="Password"
            />

            <label className="block text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>

            <Input
              name="password"
              value={stateInput.password}
              onChange={handleInputChange}
              className='mb-3'
              placeholder="Password"
            />

            <Link href="/dashboard">
              <Button className='w-full bg-[#4f46e5] mb-3 mt-5' >Daftar</Button>
            </Link>

            <Link href="/login">
              <Button className='w-full bg-[#475569] hover:bg-[#64748b]'>Login</Button>
            </Link>

          </div>

        </div>

      </div>



    </div>
  );
}
