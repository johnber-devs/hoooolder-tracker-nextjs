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
  change: 'RISE' | 'FALL' | 'EVEN';
  signedChangePrice: number;
  signedChangeRate: number;
}

export const useGetCoinTickerInfo = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<CoinTickerInfo[]>([]);

  const getCoinTickerInfo = async () => {
    setLoading(true);
    setIsFirst(false);
    try {
      const response = await getUpbitCoinPrice();
      setList(listfilter(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const listfilter = (data: any): CoinTickerInfo[] => {
    return data.map((coinInfo: any, index: number) => {
      const [market, coinName] = coinInfo.market.split('-');
      const signedChangePrice = list[index]?.tradePrice
        ? list[index]!.tradePrice - coinInfo.trade_price
        : 0;
      console.log('!!!!!!!!', signedChangePrice);
      return {
        coinName: Constant.COIN_NAME_MAPPING_TABLE[coinName],
        market: `${coinName} / ${market}`,
        tradeDate: coinInfo.trade_date,
        tradeVolume: coinInfo.acc_trade_price,
        tradePrice: coinInfo.trade_price,
        prevClosingPrice: coinInfo.prev_closing_price,
        change: coinInfo.change,
        signedChangePrice: signedChangePrice,
      };
    });
  };

  return {
    list,
    loading,
    isFirst,
    getCoinTickerInfo,
  };
};
