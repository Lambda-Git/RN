import Style from './index.module.scss';

const Loading = () => {
	return (
        <div className={Style.component}>
            <div className={Style['line-scale-pulse-out']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
	);
};

export default Loading;
