import { get, post } from "@utils/http";
import {
    GET_BTRLOCKUP_LIST, GET_BTRLOCKUP_DETAIL, GET_BTRLOCKUP_CALC_INVEST_AMOUNT,
    GET_BTRLOCKUP_CALC_LOCKUP_AMOUNT, GET_BTRLOCKUP_RECORD, GET_BTRLOCKUP_CALC_BTR_AMOUNT,
    POST_EXTRAQUOTA_ORDER, POST_BTRLOCKUP_UNFROZEN
} from '@constants/api';

// 币种列表
export function getAvailableList(params){
    return get(GET_BTRLOCKUP_LIST, params);
};

// 币种详情
export function getProductDetail(params){
    return get(GET_BTRLOCKUP_DETAIL, params);
};

// 币种详情 - 计算需要锁仓的当前币种
export function getCalcInvestAmount(params){
    return get(GET_BTRLOCKUP_CALC_INVEST_AMOUNT, params);
};

// 币种详情 - 计算需要锁仓的BTR
export function getCalcLockUpAmount(params){
    return get(GET_BTRLOCKUP_CALC_LOCKUP_AMOUNT, params);
};

// 币种详情 - 锁仓BTR增加额外额度 - 下单
export function postExtraQuotaOrder(params) {
    return post(POST_EXTRAQUOTA_ORDER, params);
};

// 币种详情 - 解锁 - BTR数量
export function getCalcLockUpBtrAmount(params) {
    return get(GET_BTRLOCKUP_CALC_BTR_AMOUNT, params);
};

// 币种详情 - 解锁
export function postUnfrozenAmount(params) {
    return post(POST_BTRLOCKUP_UNFROZEN, params);
};

// 币种锁仓记录
export function getProductRecord(params){
    return get(GET_BTRLOCKUP_RECORD, params);
};
