'use client'

import Image from "next/image";
import Button from './components/Button';

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
    </div>
  );
}
