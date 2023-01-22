export interface COIN_NAME_MAPPING_TABLE {
  [index: string]: string;
}

export class Constant {
  public static readonly UPBIT_BASE_URL = 'https://api.upbit.com';
  public static readonly COIN_NAME_MAPPING_TABLE: COIN_NAME_MAPPING_TABLE = {
    BTC: '비트코인',
    ETH: '이더리움',
  };
}
