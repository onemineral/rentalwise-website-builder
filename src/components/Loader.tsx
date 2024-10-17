import React from 'react';
import classnames from 'classnames';

export interface LoaderProps {
    size?: LoaderSize;
    light?: boolean;
    className?: string;
}

export enum LoaderSize {
    Switch = '14px',

    // Common sizes
    Large = '33px',
    Medium = '20px',
    Small = '16px',
}

const initalSize = LoaderSize.Large;

const Loader = ({
    size = initalSize,
    light = false,
    className,
}: LoaderProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classnames('block m-auto', className)}
            fill={light ? '#F8F8F8' : '#464646'}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <g transform="rotate(0 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.875s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(45 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.75s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.625s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(135 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.375s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(225 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.25s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.125s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            <g transform="rotate(315 50 50)">
                <rect x="46" y="5.5" rx="4" ry="4.05" width="8" height="27">
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
        </svg>
    );
};

export default Loader;
