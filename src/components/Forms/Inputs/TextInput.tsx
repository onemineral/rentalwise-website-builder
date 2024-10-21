import React, { ReactNode } from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';
import classnames from 'classnames';
import { RxPadding } from 'react-icons/rx';

export const Left = () => {
    return <RxPadding />;
};

export const Right = () => {
    return <span className={'text-xs text-slate-400'}>px</span>;
};

const TextInput = ({
    leftContent,
    rightContent,
    placeholder,
    value,
    onChange,
    type,
}: {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    placeholder?: string;
    value?: number | string | undefined;
    onChange?: (value: number | string | undefined) => void;
    type?: string;
}) => {
    return (
        <Tooltip content={<span className={'text-sm'}>Text input</span>}>
            <div className={classnames('relative')}>
                <input
                    className={classnames(
                        'w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none',
                        {
                            '!pr-6': !!rightContent,
                            '!pl-6': !!leftContent,
                        },
                    )}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: any) => onChange?.(e.target.value)}
                    type={type}
                />
                <div className="absolute w-6 h-6 top-0">
                    <span className={'h-full flex justify-center items-center'}>
                        {leftContent}
                    </span>
                </div>

                <div className="absolute w-6 h-6 top-0 right-0.5">
                    <div className={'h-full flex justify-center items-center'}>
                        {rightContent}
                    </div>
                </div>
            </div>
        </Tooltip>
    );
};

export default TextInput;
