import React, { ReactNode, useMemo } from 'react';
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
    label,
    leftContent,
    rightContent,
    placeholder,
    value,
    onChange,
    type,
    hint,
    multiline,
}: {
    label?: string;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    placeholder?: string;
    value?: number | string | undefined;
    onChange?: (value: number | string | undefined) => void;
    type?: string;
    hint?: string;
    multiline?: boolean;
}) => {
    const onChangeHandler = (e: any) => {
        onChange?.(e.target.value);
    };

    const classes = classnames(
        'relative w-full bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none',
    );

    const Content = useMemo(() => {
        return (
            <div
                className={classnames(
                    'relative flex items-start space-x-2 w-full',
                )}
            >
                {label && <label className={'text-xs flex items-center min-w-16 w-16 p-1'}>{label}</label>}
                {!multiline ? (
                    <input
                        className={classnames(classes, {
                            '!pr-6': !!rightContent,
                            '!pl-6': !!leftContent,
                        })}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChangeHandler}
                        type={type}
                    />
                ) : (
                    <textarea
                        className={classnames(classes, {
                            '!pr-6': !!rightContent,
                            '!pl-6': !!leftContent,
                        })}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChangeHandler}
                        rows={5}
                    />
                )}

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
        );
    }, [leftContent, placeholder, rightContent, type, value]);

    if (!hint) return <>{Content}</>;

    return (
        <Tooltip content={<span className={'text-sm'}>{hint}</span>}>
            {Content}
        </Tooltip>
    );
};

export default TextInput;
