import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUpbitCoinPrice } from 'src/core/request/get-test-api';
import { Main } from '@/templates/Main';
import { Meta } from '@/layouts/Meta';
import CoinTicker from '@/components/CoinTicker';
import { useGetCoinTickerInfo } from 'src/core/fetch/use-get-coin-ticker-info';

const Index = () => {
  const router = useRouter();
  const { loading, list: coinTickerList, getCoinTickerInfo } = useGetCoinTickerInfo();
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();

  const getCoinPrice = async () => {
    const intervalId = setInterval(async () => {
      await getCoinTickerInfo();
    }, 1000);
    setIntervalId(intervalId);
  };

  useEffect(() => {
    getCoinPrice();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }>
      <CoinTicker coinTickerList={coinTickerList} />
      <div> </div>
    </Main>
  );
};

export default Index;
