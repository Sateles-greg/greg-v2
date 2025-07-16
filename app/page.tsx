
'use client';
import React from 'react';
import Image from 'next/image';
import avatar from '../public/avatar.png';

export default function Home() {
  return (
    <main>
      <h1>Interface Greg V5</h1>
      <p>Avatar abaixo:</p>
      <Image src={avatar} alt="Avatar do Greg" width={200} height={200} />
    </main>
  );
}
