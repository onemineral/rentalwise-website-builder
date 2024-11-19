import React, { ReactNode } from 'react';
import classnames from 'classnames';

const ActionListItem = ({
    children,
    className,
    active,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    active?: boolean;
    onClick?: (e: any) => void;
}) => {
    return (
        <span
            className={classnames(
                'p-2 hover:bg-slate-100 cursor-pointer',
                { 'bg-slate-100': active },
                className,
            )}
            onClick={onClick}
        >
            {children}
        </span>
    );
};

export default ActionListItem;
