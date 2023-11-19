import Breadcrumbs from '@/components/breadcrumbs';
import Search from '@/components/search';
import Tab from '@/components/tab';
import React from 'react';

type Props = {
  params: { keyword: string };
};

function page({ params }: Props) {
  console.log(params.keyword);
  return (
    <>
      <div className="min-h-screen mx-auto px-3 sm:px-3 lg:px-16 mt-20 bg-gray-50">
        <Breadcrumbs />
        <Search />
        <Tab searchs={params?.keyword} />
      </div>
    </>
  );
}

export default page;
