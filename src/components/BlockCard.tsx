import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import classnames from 'classnames';

const BlockCard = forwardRef(
    (
        {
            active = false,
            title,
            icon,
            onDragStart,
            onDragEnd,
        }: {
            active?: boolean;
            title?: string;
            icon?: ReactNode;
            onDragStart?: () => void;
            onDragEnd?: () => void;
        },
        ref: ForwardedRef<any>,
    ) => {
        if (!icon && !title) {
            return null;
        }

        return (
            <div
                className={'flex w-full'}
                ref={ref}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
                <div
                    className={classnames(
                        'flex flex-col w-full items-center justify-center space-y-2 border border-slate-300 rounded-md px-4 py-3 cursor-pointer hover:bg-slate-100 hover:border-slate-500 select-none',
                        { 'bg-slate-100': active },
                    )}
                >
                    {icon}
                    {title && <span className={'text-xs'}>{title}</span>}
                </div>
            </div>
        );
    },
);

export default BlockCard;
