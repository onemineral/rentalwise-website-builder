import React from 'react';
import Sketch from '@uiw/react-color-sketch';
import { Dropdown } from '@/components/Dropdown';
import classnames from 'classnames';

const ColorInput = ({
    classes,
    label = 'Color',
    value,
    onChange,
}: {
    classes?: any;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
}) => {
    return (
        <Dropdown
            trigger={
                <div
                    className={classnames('relative flex w-full items-center')}
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
                    <div
                        className={
                            'w-full flex space-x-2 items-center bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 pl-1 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none'
                        }
                    >
                        <div
                            className={
                                'w-5 h-5 rounded-md border border-slate-300'
                            }
                            style={{ backgroundColor: value }}
                        />
                        <span>{value}</span>
                    </div>
                </div>
            }
            classes={{ trigger: 'w-full' }}
        >
            <Sketch
                style={{ boxShadow: 'none' }}
                color={value}
                onChange={(color) => {
                    onChange?.(color.hex);
                }}
            />
        </Dropdown>
    );
};

export default ColorInput;
