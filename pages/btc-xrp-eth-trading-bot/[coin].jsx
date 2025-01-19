// import BtrLockUpDetailView from '@views/btr-lockup-staking/detail';
import autoInvest from '@views/btc-xrp-eth-trading-bot';

const autoInvestDetail = ({ coinName }) => {
    return (
        <autoInvest coinName={coinName} />
    );
};

export default autoInvestDetail;

export async function getServerSideProps(ctx) {
    const coinName = ctx?.query?.coin?.toUpperCase() || '';

    // 将数据作为props传递给页面组件
    return {
        props: {
            coinName
        }
    };
};