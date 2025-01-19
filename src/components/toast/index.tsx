import ReactDom from 'react-dom/client';
import Toast from './toast';

const containers = [] as HTMLDivElement[];
let timer: number;

/**
 * @description: 去除对应的新增节点
 * @param {HTMLDivElement} container
 */
const unmount = (container: HTMLDivElement) => {
    if (!container) return;
    ReactDom.createRoot(container).unmount();
    container.parentNode?.removeChild(container);
};

/**
 * @description: 隐藏所有的属性
 */
const hide = () => {
    while (containers.length > 0) {
        const container = containers.pop();
        if (!container) break;
        unmount(container);
    };
};

export const toast = ({msg, type, duration = 5000, afterClose}: {msg: string, type: string, duration: number, afterClose: () => void}) => {
    const containerDiv = document.createElement('div');
    document.body.appendChild(containerDiv);

    if (timer) {
        window.clearTimeout(timer);
    };

    timer = window.setTimeout(hide, duration);

    // 这里默认传值visible
    ReactDom.createRoot(containerDiv).render(<Toast visible={true} type={type} msg={msg} duration={duration} afterClose={afterClose}/>);
};
