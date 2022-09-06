export interface Icrypto {
  last_updated: string;
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  roi: number;
  added: boolean;
}
