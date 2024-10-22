import React, { useState } from 'react';
import Sketch from '@uiw/react-color-sketch';
import { Dropdown } from '@/components/Dropdown';

const ColorInput = () => {
    const [color, setColor] = useState<string>('#fff');

    return (
        <Dropdown
            trigger={
                <div
                    className={
                        'w-full flex space-x-2 items-center bg-white placeholder:text-slate-400 text-slate-700 text-xs border border-slate-200 rounded-md px-2 pl-1 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none'
                    }
                >
                    <div
                        className={'w-5 h-5 rounded-md border border-slate-300'}
                        style={{ backgroundColor: color }}
                    />
                    <span>{color}</span>
                </div>
            }
        >
            <Sketch
                style={{ boxShadow: 'none' }}
                color={'#fff'}
                onChange={(color) => {
                    setColor(color.hex);
                }}
            />
        </Dropdown>
    );
};

export default ColorInput;
