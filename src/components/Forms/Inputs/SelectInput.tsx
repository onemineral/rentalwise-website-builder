import React, { useRef } from 'react';
import classnames from 'classnames';

export type SelectInputOption = { label: string; value: any };

export type SelectInputProps = {
    label?: string;
    value?: any;
    options?: SelectInputOption[];
    onChange?: (value: any) => void;
    classes?: any;
};

const SelectInput = ({
    label,
    value,
    options,
    onChange,
    classes,
}: SelectInputProps) => {
    const selectRef: any = useRef();

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
            <select
                ref={selectRef}
                className="relative w-full bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md pl-2 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointerfocus:outline-none"
                value={value}
                onChange={(e: any) => onChange?.(e.target.value)}
            >
                {options?.map((option: SelectInputOption) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-[0.2rem] right-1 text-slate-700 pointer-events-none"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
            </svg>
        </div>
    );
};

export default SelectInput;
