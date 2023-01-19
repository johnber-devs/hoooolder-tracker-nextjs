import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUpbitCoinPrice } from 'src/core/request/get-test-api';
import { Main } from '@/templates/Main';
import { Meta } from '@/layouts/Meta';
const Index = () => {
  const router = useRouter();

  const getCoinPrice = async () => {
    const res = await getUpbitCoinPrice();
    console.log(res.data);
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }>
      <div> BTC/KRW </div>
      <div> </div>
    </Main>
  );
};

export default Index;
