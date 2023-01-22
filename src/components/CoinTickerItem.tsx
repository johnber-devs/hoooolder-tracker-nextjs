import React, { useEffect } from 'react';
import { CoinTickerInfo } from 'src/core/fetch/use-get-coin-ticker-info';

export interface CoinTickerItemProps {
  coinTickerInfo: CoinTickerInfo;
  children?: React.ReactNode;
}

export default function CoinTickerItem({ coinTickerInfo }: CoinTickerItemProps) {
  useEffect(() => {
    console.log(coinTickerInfo);
  });
  return (
    <>
      <td>
        <div>
          <div>{coinTickerInfo.coinName}</div>
          <div>{coinTickerInfo.market}</div>
        </div>
      </td>
      <td>
        <div>
          <div>{coinTickerInfo.tradePrice}</div>
        </div>
      </td>
      <td>
        <div>+17.08%</div>
        <div>2000</div>
      </td>
      <td>
        <div>989,853백만</div>
      </td>
    </>
  );
}
