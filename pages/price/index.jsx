import Loading from '@components/loading';

const PriceHome = () => {
    <div>
        <Loading />
        <style jsx>{`
            div{
                min-height: 100vh;
            }
        `}</style>
    </div>
};

export default PriceHome;

export async function getServerSideProps(ctx) {
    const locales = ctx.locale === 'en' ? '' : `/${ctx.locale}`;

    // 将数据作为props传递给页面组件
    return {
        redirect: {
            permanent: true,
            destination: `${locales}/price/XRP`
        }
    };
};