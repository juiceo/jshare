export enum CurrencyCodes {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    CHF = 'CHF',
}

export type CurrencyCode = `${CurrencyCodes}`;
export const Currencies = Object.keys(CurrencyCodes) as CurrencyCode[];
