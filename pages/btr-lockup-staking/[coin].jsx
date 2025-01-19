import BtrLockUpDetailView from '@views/btr-lockup-staking/detail';

const BtrLockUpDetail = ({ coinName }) => {
    return (
        <BtrLockUpDetailView coinName={coinName} />
    );
};

export default BtrLockUpDetail;

export async function getServerSideProps(ctx) {
    // 设置缓存策略
    ctx.res.setHeader("Cache-Control", "no-cache, max-age=0, stale-if-error=3600");

    // 获取参数
    const coinName = ctx?.query?.coin?.toUpperCase() || '';

    // 将数据作为props传递给页面组件
    return {
        props: {
            coinName
        }
    };
};