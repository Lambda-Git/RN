import { get, post } from "@utils/http";
import {
    GET_CONVERTER_DETAIAL, GET_CONVERTER_CALCULATOR, GET_FIAT_NAME, GET_COIN_NAME, GET_HISTORY_LINE, GET_TOP_ASSETS, GET_MARKETS
} from '@constants/api';

// Converter 详情页列表数据
export function getConverterDetail(params) {
    return get(GET_CONVERTER_DETAIAL, params);
};

// Converter 计算器
export function getConverterCalculator(params) {
    return get(GET_CONVERTER_CALCULATOR, params);
};

// 代币列表
export function getFiatName() {
    return get(GET_FIAT_NAME);
};

// 法币列表
export function getCoinName() {
    return get(GET_COIN_NAME);
};

// 历史数据 折线
export function getHistoryPriceLine(params) {
    return get(GET_HISTORY_LINE, params);
};

// topCryptoAssets
export function getTopCryptoAssets() {
    return get(GET_TOP_ASSETS);
};

// spot 、Futures 、etf - Markets
export function getMarkets(params) {
    return get(GET_MARKETS, params);
};
