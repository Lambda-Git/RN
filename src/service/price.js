import { get } from "@utils/http";
import { GET_PRICE_COIN_LIST, GET_PRICE_COIN_INFO } from '@constants/api';

export function getPriceCoinList (params) {
    return get(GET_PRICE_COIN_LIST, params);
};

export function getPriceCoinInfo (params) {
    return get(GET_PRICE_COIN_INFO, params);
};
