import React from 'react';

const SortIcon:React.FC<{size?:string}> = ({size="1em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2z"/>
        </svg>
    );
};

export default SortIcon;