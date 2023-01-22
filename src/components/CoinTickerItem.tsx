import React, { useEffect, useMemo, useState, useRef } from 'react';
import { CoinTickerInfo } from 'src/core/fetch/use-get-coin-ticker-info';

export interface CoinTickerItemProps {
  coinTickerInfo: CoinTickerInfo;
  children?: React.ReactNode;
}

export default function CoinTickerItem({ coinTickerInfo }: CoinTickerItemProps) {
  const [prevDateRisingRate, setPrevDatesetRisingRate] = useState(0);
  const [prevDateRisingPrice, setPrevDatesetRisingPrice] = useState(0);
  const [signed, setSigned] = useState(true);

  const [prevCoinPrice, setPrevCoinPrice] = useState(0);
  const [changePrice, setChangePrice] = useState(0);
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
  }, [coinTickerInfo.tradePrice]);

  useMemo(() => {
    if (prevCoinPrice !== 0) {
      setChangePrice(coinTickerInfo.tradePrice - prevCoinPrice);
    }
    setPrevCoinPrice(coinTickerInfo.tradePrice);
  }, [coinTickerInfo.tradePrice]);

  return (
    <>
      <td className="px-2">
        <div>
          <div>{coinTickerInfo.coinName}</div>
          <div>{coinTickerInfo.market}</div>
        </div>
      </td>
      <td>
        <div>
          <div className={'spx-2' + signed ? 'price-up' : 'price-down'}>
            {coinTickerInfo.tradePrice.toLocaleString()}
          </div>
          <div className={changePrice > 0 ? 'price-up-animation' : 'price-down-animation'}>
            <span>
              {changePrice > 0 ? '+' : ''}
              {changePrice}({changePrice === 0 ? '-' : changePrice > 0 ? '↑' : '↓'})
            </span>
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

        .price-up-animation {
          animation: price-up 0.7s linear;
        }
        .price-down-animation {
          animation: price-down 0.7s linear;
        }
        @keyframes price-up {
          0% {
            color: red;
          }
          70% {
            color: red;
          }
          100% {
            color: black;
          }
        }
        @keyframes price-down {
          0% {
            color: blue;
          }
          70% {
            color: blue;
          }
          100% {
            color: black;
          }
        }
      `}</style>
    </>
  );
}
