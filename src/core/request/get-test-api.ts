import { api } from '../api';
import { AxiosResponse } from 'axios';

export const getUpbitCoinPrice = (): Promise<AxiosResponse<[]>> => {
  return api.upbit.get('/v1/ticker', { markets: 'KRW-BTC, KRW-ETH' });
};
