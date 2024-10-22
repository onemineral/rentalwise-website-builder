import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import classnames from 'classnames';

const BlockCard = forwardRef(
    (
        {
            active = false,
            title,
            icon,
        }: { active?: boolean; title?: string; icon?: ReactNode },
        ref: ForwardedRef<any>,
    ) => {
        if (!icon && !title) {
            return null;
        }

        return (
            <div className={'w-auto'} ref={ref}>
                <div
                    className={classnames(
                        'flex flex-col items-center justify-center w-auto space-y-2 border border-slate-300 rounded-md px-8 py-3 cursor-pointer hover:bg-slate-100 hover:border-slate-500 select-none',
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
