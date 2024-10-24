import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Tooltip from '@/components/Tooltip/Tooltip';

export type ButtonGroupItem = {
    value?: any;
    icon?: ReactNode;
    description?: string;
};

const ButtonGroupInput = ({
    buttons,
    value,
    onChange,
}: {
    buttons: ButtonGroupItem[];
    value?: any;
    onChange?: (value: any) => void;
}) => {
    return (
        <div className="flex justify-around items-center text-xs text-slate-700 w-full bg-white placeholder:text-slate-400 border border-slate-200 rounded-md px-2 py-0.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none">
            {buttons.map((i: any, index: number) => (
                <Tooltip
                    key={index}
                    content={i.description}
                    classes={{ trigger: '!w-auto' }}
                >
                    <div
                        key={i.value}
                        className={classnames(
                            'px-2 py-1 cursor-pointer border border-transparent rounded-md',
                            {
                                'bg-slate-100 border !border-slate-400':
                                    i.value === value,
                            },
                        )}
                        onClick={() => onChange?.(i.value)}
                    >
                        {i.icon}
                    </div>
                </Tooltip>
            ))}
        </div>
    );
};

export default ButtonGroupInput;
