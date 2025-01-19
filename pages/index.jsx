import Loading from '@components/loading';

const Home = () => {
    <div>
        <Loading />
        <style jsx>{`
            div{
                min-height: 100vh;
            }
        `}</style>
    </div>
};

export default Home;

export async function getServerSideProps() {
    // 将数据作为props传递给页面组件
    return {
        redirect: {
            permanent: true,
            destination: '/home'
        }
    };
};