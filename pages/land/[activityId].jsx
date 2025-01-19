import LandingPageView from '@views/landing-page';

const LandingPageDetail = ({ activityId }) => {
    return (
        <LandingPageView activityId={activityId} />
    );
};

export default LandingPageDetail;

export async function getServerSideProps(ctx) {
    const activityId = ctx?.query?.activityId || '';

    // 将数据作为props传递给页面组件
    return {
        props: {
            activityId
        }
    };
};