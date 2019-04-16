import React from 'react';
import './search-btn.scss'
export const Button = ({text, active, light, onClick, dataId}) => {
    const handleClick = (...args) => {
            onClick(...args);
    };

    const isActive = active ? "search-btn--active"  : '';
    const isLight = light ? "search-btn--light"  : '';
    const classNames = `search-btn ${isActive} ${isLight}`;

    return (
        <button data-id={dataId} onClick={handleClick} className={classNames}>{text}</button>
    )
};
