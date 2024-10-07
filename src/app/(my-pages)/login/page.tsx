'use client'

import React, { useState } from 'react';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

export default function Home() {
  const [stateInput, setStateInput] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput({ ...stateInput, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-5">

      <div className='flex justify-center mt-20'>
        <div style={{ width: '500px' }}>

          <h1 className='text-xl text-center mb-5 text-blue-500'>Login Apps</h1>

          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>

          <Input
            name="username"
            value={stateInput.username}
            onChange={handleInputChange}
            className='mb-3'
            placeholder="Username"
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

          <h1>{stateInput.username}</h1>

          <Button className='w-full mb-3' onClick={handleClick}>Login</Button>
          <Button className='w-full bg-rose-500 hover:bg-rose-600' onClick={handleClick}>Register</Button>

        </div>
      </div>

    </div>
  );
}
