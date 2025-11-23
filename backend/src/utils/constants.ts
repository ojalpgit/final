// Currency conversion: 1 USD = 0.000012 BTC = 1.2 Sbtc
// Therefore: 1 BTC = 100,000 Sbtc, and 1 Sbtc = 0.00001 BTC
export const USD_TO_BTC_RATIO = 0.000012;
export const BTC_TO_USD_RATIO = 1 / 0.000012; // 83,333.33...
export const USD_TO_SBTC_RATIO = 1.2;
export const SBTC_TO_USD_RATIO = 1 / 1.2; // 0.8333...
export const SBTC_TO_BTC_RATIO = 0.00001;
export const BTC_TO_SBTC_RATIO = 100000;

export function btcToSbtc(btc: number): number {
  return btc * BTC_TO_SBTC_RATIO;
}

export function sbtcToBtc(sbtc: number): number {
  return sbtc * SBTC_TO_BTC_RATIO;
}

export function btcToUsd(btc: number): number {
  return btc * BTC_TO_USD_RATIO;
}

export function usdToBtc(usd: number): number {
  return usd * USD_TO_BTC_RATIO;
}

export function sbtcToUsd(sbtc: number): number {
  return sbtc * SBTC_TO_USD_RATIO;
}

export function usdToSbtc(usd: number): number {
  return usd * USD_TO_SBTC_RATIO;
}

export function formatBtc(btc: number): string {
  return btc.toFixed(8);
}

export function formatSbtc(sbtc: number): string {
  return sbtc.toFixed(2);
}

