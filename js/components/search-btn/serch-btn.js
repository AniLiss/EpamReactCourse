import React from 'react';
import './search-btn.scss'
export const Button = ({text, active, light}) => {
    const isActive = active ? "search-btn--active"  : '';
    const isLight = light ? "search-btn--light"  : '';
    const classNames = `search-btn ${isActive} ${isLight}`;

    return (
        <button className={classNames}>{text}</button>
    )
};
