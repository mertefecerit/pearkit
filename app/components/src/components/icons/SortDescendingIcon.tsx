import React from 'react';

const SortDescendingIcon:React.FC<{size?:string}> = ({size="1em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2z"/>
        </svg>
    );
};

export default SortDescendingIcon;