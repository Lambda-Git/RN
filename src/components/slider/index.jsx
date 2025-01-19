import { useState, useEffect } from 'react';
import Style from './index.module.scss';

function Slider({ initialPosition, onChangePosition }) {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false); 

    useEffect(() => {
        setPosition(initialPosition);
    }, [initialPosition]);
    
    function handleSliderClick(event) {
        if (!isDragging) {
            const container = event.currentTarget;
            const newPosition = ((event.clientX - container.getBoundingClientRect().left) / container.offsetWidth) * 100;
            const fromatNewPosition = Math.ceil(newPosition);

            setPosition(fromatNewPosition);
            onChangePosition(fromatNewPosition);
        };
    };

    function handleSliderDragStart() {
        setIsDragging(true);
    };

    function handleSliderDrag(event) {
        if (isDragging) {
            const container = event.currentTarget;
            const newPosition = ((event.clientX - container.getBoundingClientRect().left) / container.offsetWidth) * 100;
            const fromatNewPosition = Math.ceil(Math.min(100, Math.max(0, newPosition)));

            setPosition(fromatNewPosition);
            onChangePosition(fromatNewPosition);
        };
    };

    function handleSliderDragEnd() {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleSliderDrag);
    };

    return (
        <div
            className={Style.component}
            onClick={handleSliderClick}
            onMouseDown={handleSliderDragStart}
            onMouseMove={handleSliderDrag}
            onMouseUp={handleSliderDragEnd}
        >
            <div
                className={Style.component_step}
                style={{ width: `${position}%` }}
            />
            <div
                className={Style.component_dot}
                style={{ left: `${position}%` }}
            />
        </div>
    );   
};

export default Slider;
