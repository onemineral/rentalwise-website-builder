import React, { ReactNode } from 'react';
import classnames from 'classnames';

const ActionListItem = ({
    children,
    className,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    onClick?: (e: any) => void;
}) => {
    return (
        <span
            className={classnames(
                'p-2 hover:bg-slate-100 cursor-pointer',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </span>
    );
};

export default ActionListItem;
