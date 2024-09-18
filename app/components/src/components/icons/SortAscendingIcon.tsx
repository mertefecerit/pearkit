import React from 'react';

const SortAscendingIcon:React.FC<{size?:string}> = ({size="1em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2z"/>
        </svg>
    );
};

export default SortAscendingIcon;