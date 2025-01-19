import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import Style from './toast.module.scss';

export interface ToastProps {
    /** 提示类型 */
    type: string
    /** 轻提示内容 */
    msg: string
    /**
     * @description: 是否显示
     */
    visible?: boolean
    /**
     * @description: 关闭动画结束后触发的回调函数
     */
    afterClose?: () => void
    /** 轻提示持续显示的时间 */
    duration?: number
};

const Toast: React.FC<ToastProps> = props => {
    const { type, duration, msg, afterClose, visible } = props;
    const [show, setShow] = useState(false);
    const timer = useRef<NodeJS.Timeout>();

    const clearTimer = (): void => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = undefined;
        };
    };

    useEffect(() => {
        setShow(!!visible);
    }, [visible]);

    useEffect(() => {
        if (duration && show) {
            timer.current = setTimeout(() => {
                setShow(false);
                if (afterClose) afterClose();
                clearTimer();
            }, duration);
        };
    }, [duration, show, afterClose]);

    return show ? (
        <div className={Style.component}>
            <div className={classnames({
                [Style.toast]: true,
                [Style[`toast_${type}`]]: !!type
            })}>
                {!!type && <i className={`iconfont icon-toast-${type}`} />}
                <div className={Style.toast_msg}>{msg}</div>
            </div>
        </div>
        ) : null
}

Toast.defaultProps = {
    duration: 1500,
    visible: false,
    afterClose: undefined,
}

export default Toast;
