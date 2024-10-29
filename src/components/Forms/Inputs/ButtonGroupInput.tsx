import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Tooltip from '@/components/Tooltip/Tooltip';

export type ButtonGroupItem = {
    value?: any;
    label?: ReactNode;
    description?: string;
};

const ButtonGroupInput = ({
    label,
    buttons,
    value,
    onChange,
    classes,
}: {
    label?: ReactNode;
    buttons: ButtonGroupItem[];
    value?: any;
    onChange?: (value: any) => void;
    classes?: any;
}) => {
    return (
        <div
            className={classnames(
                'relative flex w-full items-center',
                classes?.container,
            )}
        >
            {label && (
                <label
                    className={classnames(
                        'text-xs flex items-center min-w-20 w-20 p-1',
                        classes?.label,
                    )}
                >
                    {label}
                </label>
            )}
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
                                'px-1 py-1 cursor-pointer border border-transparent rounded-md',
                                {
                                    'bg-slate-100 border !border-slate-400':
                                        i.value === value,
                                },
                            )}
                            onClick={() => onChange?.(i.value)}
                        >
                            {i.label}
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default ButtonGroupInput;
