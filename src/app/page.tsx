'use client'

import Button from '@/app/components/Button';

export default function Home() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-5">
      <div className="flex flex-col flex-wrap gap-2">
        <div><Button onClick={handleClick}>Dashboard</Button></div>
        <div><Button onClick={handleClick}>Login</Button></div>
        <div><Button onClick={handleClick}>Register</Button></div>
      </div>

      <input
        type="email"
        className="w-full rounded-lg border-rose-200 p-4 pe-12 text-sm shadow-sm outline-rose-500"
        placeholder="Enter email"
      />
    </div>
  );
}
