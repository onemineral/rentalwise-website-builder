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
    classes,
    disabled,
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
    classes?: any;
    disabled?: boolean;
}) => {
    const onChangeHandler = (e: any) => {
        onChange?.(e.target.value);
    };

    const baseInputClasses = classnames(
        'relative w-full bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 py-1.5 transition duration-300 ease shadow-sm focus-visible:ring-0 focus-visible:outline-none',
        {
            'focus:outline-none focus:border-slate-400 focus:shadow hover:border-slate-400':
                !disabled,
        },
        classes?.input,
    );

    const Content = useMemo(() => {
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
                {!multiline ? (
                    <input
                        className={classnames(baseInputClasses, {
                            'pr-6': !!rightContent,
                            'pl-6': !!leftContent,
                        })}
                        placeholder={placeholder}
                        value={value || ''}
                        onChange={onChangeHandler}
                        type={type}
                        disabled={disabled}
                    />
                ) : (
                    <textarea
                        className={classnames(
                            baseInputClasses,
                            {
                                'pr-6': !!rightContent,
                                'pl-6': !!leftContent,
                            },
                            classes?.input,
                        )}
                        placeholder={placeholder}
                        value={value || ''}
                        onChange={onChangeHandler}
                        rows={5}
                        disabled={disabled}
                    />
                )}

                {leftContent && (
                    <div
                        className={classnames(
                            'absolute w-6 h-6 top-0',
                            classes?.leftContent,
                        )}
                    >
                        <span
                            className={
                                'h-full flex justify-center items-center'
                            }
                        >
                            {leftContent}
                        </span>
                    </div>
                )}

                {rightContent && (
                    <div
                        className={classnames(
                            'absolute w-6 h-6 top-0.5 right-0.5',
                            classes?.rightContent,
                        )}
                    >
                        <div
                            className={
                                'h-full flex justify-center items-center'
                            }
                        >
                            {rightContent}
                        </div>
                    </div>
                )}
            </div>
        );
    }, [leftContent, placeholder, rightContent, type, value, classes]);

    if (!hint) return <>{Content}</>;

    return (
        <Tooltip content={<span className={'text-sm'}>{hint}</span>}>
            {Content}
        </Tooltip>
    );
};

export default TextInput;
