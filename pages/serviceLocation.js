import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../src/components/Header';

export default function ServiceLocation() {

  const MapWithNoSSR = dynamic(() => import('../src/components/MapBox'), {
    ssr: false,
  });


    return (
      <div>
        <Header />

        <MapWithNoSSR />

        <main>
          
        </main>

      </div>
    

  );
  
};
