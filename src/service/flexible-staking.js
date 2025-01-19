import { get, post } from "@utils/http";
import {
    GET_INVEST_OVERVIEW, GET_FLEXIBLE_COIN, GET_FLEXIBLE_LIST, GET_FLEXIBLE_VIP_INVEST,
    GET_FLEXIBLE_VIP_COIN, GET_FLEXIBLE_DETAIL, POST_FLEXIBLE_JOIN, POST_FLEXIBLE_UNFREEZE,
    GET_FLEXIBLE_RECORD_COIN, GET_FLEXIBLE_RECORD_LIST, GET_FIXED_RECORD_LIST
} from '@constants/api';

// 用户收益
export function getInvestOverview(params){
    return get(GET_INVEST_OVERVIEW, params);
};

// 活期币种列表
export function getFlexibleCoinList(params){
    return get(GET_FLEXIBLE_COIN, params);
};

// 活期 产品列表
export function getFlexibleList(params){
    return get(GET_FLEXIBLE_LIST, params);
};

// 活期 产品详情
export function getFlexibleDetail(params){
    return get(GET_FLEXIBLE_DETAIL, params);
};

// 活期 产品详情 投资
export function postFlexibleJoin(params){
    return post(POST_FLEXIBLE_JOIN, params);
};

// 活期 产品详情 解锁
export function postFlexibleUnfreeze(params){
    return post(POST_FLEXIBLE_UNFREEZE, params);
};

// VIP 投资详情
export function getFlexibleVipInvest(params){
    return  get(GET_FLEXIBLE_VIP_INVEST, params);
};

// VIP 投资币种列表
export function getFlexibleVipCoinList(params){
    return  get(GET_FLEXIBLE_VIP_COIN, params);
};

// 记录 活期列表
export function getFlexibleRecordList(params){
    return  get(GET_FLEXIBLE_RECORD_LIST, params);
};

// 记录 定期列表
export function getFixedRecordList(params){
    return  get(GET_FIXED_RECORD_LIST, params);
};

// 记录 币种列表
export function getFlexibleRecordCoinList(params){
    return  get(GET_FLEXIBLE_RECORD_COIN, params);
};
