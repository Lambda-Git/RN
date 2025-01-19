import FlexibleDetailView from '@views/flexible-staking/detail';

const FlexibleDetail = ({ coinName }) => {
    return (
        <FlexibleDetailView coinName={coinName} />
    );
};

export default FlexibleDetail;

export async function getServerSideProps(ctx) {
    // 设置缓存策略
    ctx.res.setHeader("Cache-Control", "no-cache, max-age=0, stale-if-error=3600");

    // 获取参数
    const coinName = ctx?.query?.coin?.toLowerCase() || '';

    // 将数据作为props传递给页面组件
    return {
        props: {
            coinName
        }
    };
};