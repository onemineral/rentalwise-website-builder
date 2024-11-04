import React from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';
import classnames from 'classnames';

const PositionIcon = ({
    active,
    description,
    children,
    onClick,
}: {
    active?: boolean;
    description?: string;
    children: React.ReactNode;
    onClick?: (e: any) => void;
}) => {
    return (
        <Tooltip content={description}>
            <div
                className={classnames(
                    'flex justify-center hover:bg-slate-200 cursor-pointer',
                    { 'bg-slate-300': active },
                )}
                onClick={onClick}
            >
                {children}
            </div>
        </Tooltip>
    );
};

export default PositionIcon;
