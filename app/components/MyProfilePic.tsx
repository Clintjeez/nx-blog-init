import React from 'react';
import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        src='/images/clint.png'
        alt='Clinton'
        width={200}
        height={200}
        priority={true}
        className='mx-auto mt-8 rounded-full'
      />
    </section>
  );
}
