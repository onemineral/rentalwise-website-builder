import React, { forwardRef, ReactNode } from 'react';

const BaseButton = forwardRef(
    (
        {
            onClick,
            children,
        }: {
            onClick?: (e: any) => void;
            children?: ReactNode;
        },
        ref: any,
    ) => {
        return (
            <button
                ref={ref}
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-md focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus-visible:outline-none focus-visible:ring-0"
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        );
    },
);

export default BaseButton;
