import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import axios from 'axios';

const Index = () => {
  const router = useRouter();
  // const [coinPrices, setCoinPrices] = useState<any>([])

  // const getPriceBTC = async () => {
  //   const res = await fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH');
  //   const data = await res.json();
  //   console.log('??',data)
  //   data.map((coinPrice: any) => {
  //     setCoinPrices([...coinPrices, {
  //       market: coinPrice.market,
  //       trade_price: coinPrice.trade_price
  //     }])
  //   })
  // }

  // useEffect(() => {
  //   async function getCoin() {
  //     await getPriceBTC()
  //   }
  //   getCoin()
  //   console.log(coinPrices)
  // })

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div> BTC/KRW </div>
      <div> </div>
    </Main>
  );
};

export default Index;
