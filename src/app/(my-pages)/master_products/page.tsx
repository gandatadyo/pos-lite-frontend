'use client'

import Sidebar from '@/app/components/Sidebar';

export default function Home({ params }: { params: { name: string } }) {
  console.log(params);

  return (
    <div>
      <Sidebar>
        <div>
          <h1>Tet test</h1>
        </div>
      </Sidebar>
    </div>
  );
}
