
import Breadcrumbs from '@/components/breadcrumbs';
import Search from '@/components/search';
import Tab from '@/components/tab';
import React from 'react';

export default function SekilasIlmu() {
  return (
    <>
      <div className="min-h-screen mx-auto px-3 sm:px-3 lg:px-16 mt-20 bg-gray-50">
        <Breadcrumbs />
        <Search />
        <Tab searchs=''/>
      </div>
    </>
  );
}
