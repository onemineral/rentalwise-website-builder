import React, { forwardRef, ReactNode } from 'react';
import classnames from 'classnames';

const BaseButton = forwardRef(
    (
        {
            onClick,
            children,
            className,
        }: {
            onClick?: (e: any) => void;
            children?: ReactNode;
            className?: string;
        },
        ref: any,
    ) => {
        return (
            <button
                ref={ref}
                className={classnames(
                    'rounded-md bg-slate-800 py-1.5 px-4 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-md focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus-visible:outline-none focus-visible:ring-0',
                    className,
                )}
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        );
    },
);

export default BaseButton;
