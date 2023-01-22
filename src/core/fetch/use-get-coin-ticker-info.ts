import { useState, useEffect } from 'react';
import { getUpbitCoinPrice } from 'src/core/request/get-test-api';
import { Constant, COIN_NAME_MAPPING_TABLE } from 'src/core/constant';

export interface CoinTickerInfo {
  coinName: string;
  market: string;
  tradeDate: string;
  tradeVolume: number;
  tradePrice: number;
  prevClosingPrice: number;
}

export const useGetCoinTickerInfo = () => {
  const [list, setList] = useState<CoinTickerInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const getCoinTickerInfo = async () => {
    setLoading(true);
    try {
      const response = await getUpbitCoinPrice();
      setList(listfilter(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    loading,
    getCoinTickerInfo,
  };
};

export const listfilter = (data: any): CoinTickerInfo[] => {
  return data.map((coinInfo: any) => {
    const [market, coinName] = coinInfo.market.split('-');
    return {
      coinName: Constant.COIN_NAME_MAPPING_TABLE[coinName],
      market: `${coinName} / ${market}`,
      tradeDate: coinInfo.trade_date,
      tradeVolume: coinInfo.trade_volume,
      tradePrice: coinInfo.trade_price,
      prevClosingPrice: coinInfo.prev_closing_price,
    };
  });
};
