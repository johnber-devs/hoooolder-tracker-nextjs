import React from 'react';
import CoinTickerItem from './CoinTickerItem';
import { CoinTickerInfo } from 'src/core/fetch/use-get-coin-ticker-info';

export interface CoinTickerProps {
  coinTickerList: CoinTickerInfo[];
  children?: React.ReactNode;
}

export default function CoinTicker({ coinTickerList = [] }: CoinTickerProps) {
  return (
    <div>
      <table className="w-full text-xs border table-fixed">
        <tbody>
          <tr>
            <th>한글명</th>
            <th>현재가</th>
            <th>전일대비</th>
            <th>거래대금</th>
          </tr>
          {coinTickerList &&
            coinTickerList.map((coinTickerInfo: CoinTickerInfo) => (
              <tr className="text-right">
                <CoinTickerItem coinTickerInfo={coinTickerInfo} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
