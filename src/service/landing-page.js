import { postArr, get } from "@utils/http";
import Cookies from 'js-cookie';

import {
    GET_LANDING_DETAIL,
    POST_LANDING_SIGN,
    GET_LANG_DATA
} from '@constants/api';

const ensureBaseHeaders = (headers = {}) => {
    return {
        'exchange-token': Cookies.get('token_url') || '',
        'exchange-client': 'pc',
        'exchange-language': Cookies.get('clientCommonlanguage') || 'en_US',
        'content-type': 'application/json;charset=UTF-8',
        ...headers
    };
};

// 多语言
export function getLang(params) {
    return get(`${GET_LANG_DATA}${params.localeId || 'en_US'}.json`);
}

// 详情
export function getLandingDetail(params, headers) {
    return get(GET_LANDING_DETAIL + `/${params.activityId}`, {from:params.from || null}, ensureBaseHeaders(headers));
};

// 报名
export function postLandingSign(params,headers) {
    return postArr(POST_LANDING_SIGN, params, ensureBaseHeaders(headers));
};



