import React, { useEffect, useState } from 'react';
import { CoinTickerInfo } from 'src/core/fetch/use-get-coin-ticker-info';

export interface CoinTickerItemProps {
  coinTickerInfo: CoinTickerInfo;
  children?: React.ReactNode;
}

export default function CoinTickerItem({ coinTickerInfo }: CoinTickerItemProps) {
  const [prevDateRisingRate, setPrevDatesetRisingRate] = useState(0);
  const [prevDateRisingPrice, setPrevDatesetRisingPrice] = useState(0);
  const [signed, setSigned] = useState(true);
  useEffect(() => {
    const { prevClosingPrice, tradePrice } = coinTickerInfo;
    const signed = tradePrice - prevClosingPrice;
    if (signed >= 0) {
      setSigned(true);
      setPrevDatesetRisingPrice(tradePrice - prevClosingPrice);
      setPrevDatesetRisingRate(
        ((coinTickerInfo.tradePrice - coinTickerInfo.prevClosingPrice) /
          coinTickerInfo.prevClosingPrice) *
          100
      );
    } else {
      setSigned(false);
      setPrevDatesetRisingPrice(prevClosingPrice - tradePrice);
      setPrevDatesetRisingRate(
        ((coinTickerInfo.prevClosingPrice - coinTickerInfo.tradePrice) /
          coinTickerInfo.prevClosingPrice) *
          100
      );
    }
  }, [prevDateRisingRate]);

  return (
    <>
      <td className="px-2">
        <div>
          <div>{coinTickerInfo.coinName}</div>
          <div>{coinTickerInfo.market}</div>
        </div>
      </td>
      <td className={'spx-2' + signed ? 'price-up' : 'price-down'}>
        <div>
          <div>{coinTickerInfo.tradePrice.toLocaleString()}</div>
          <div>
            <span>{coinTickerInfo.signedChangePrice}</span>
            <span>(↑ ↓ -)</span>
          </div>
        </div>
      </td>
      <td className={'spx-2' + signed ? 'price-up' : 'price-down'}>
        <div>
          {signed ? '+' : '-'} {prevDateRisingRate.toFixed(2)}%
        </div>
        <div>{prevDateRisingPrice}</div>
      </td>
      <td className={'spx-2'}>
        <div>{(coinTickerInfo.tradeVolume / 1_000_000).toFixed(0)}백만</div>
      </td>

      <style jsx>{`
        .price-up {
          color: red;
        }
        .price-down {
          color: blue;
        }
        .price-even {
          color: black;
        }
      `}</style>
    </>
  );
}
