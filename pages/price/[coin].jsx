import { getPriceCoinInfo } from '@service/price';

import Price from '@views/price';

const PriceDetail = ({ coinName, coinDetail }) => {
    return (
        <Price coinName={coinName} coinDetail={coinDetail} />
    );
};

export default PriceDetail;

export async function getServerSideProps(ctx) {
    // 设置缓存策略
    ctx.res.setHeader("Cache-Control", "no-cache, max-age=0, stale-if-error=3600");

    // 获取参数
    const urlPathCoin = ctx?.query?.coin?.toUpperCase() || '';
    let coinName = urlPathCoin;

    // 处理ETF的币对
    if (urlPathCoin.indexOf('ETF') > -1) {
        const splitCoin = urlPathCoin.split('-');
        coinName = `${splitCoin[0]}${splitCoin[2]}`;
    };

    // 获取币对详情
    let coinDetail = {};

    try {
        const params = {
            coinName,
            language: ctx.locale
        };
        const detailRes = await getPriceCoinInfo(params);
        const detailResData = detailRes?.code == 0 ? detailRes?.data : {};
        const coinDetailInfo = detailResData?.etf ? detailResData?.etfCoinInfo : detailResData?.commonCoinInfo;
        
        coinDetail = {
            isEtf: detailResData?.etf || false,
            info: coinDetailInfo || {},
            market: detailResData?.marketInfo || {},
            certikInfoVo: detailResData?.certikInfoVo || null
        };
    } catch (error) {};

    // 将数据作为props传递给页面组件
    return {
        props: {
            coinName,
            coinDetail
        }
    };
};