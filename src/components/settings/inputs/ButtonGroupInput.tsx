import React, { useState } from 'react';
import classnames from 'classnames';
import {
    MdOutlineFormatAlignCenter,
    MdOutlineFormatAlignJustify,
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignRight,
} from 'react-icons/md';

const ButtonGroupInput = () => {
    const [active, setActive] = useState(3);
    const buttons: any = [
        {
            value: 1,
            label: <MdOutlineFormatAlignLeft size={18}/>,
        },
        {
            value: 2,
            label: <MdOutlineFormatAlignCenter size={18}/>,
        },
        {
            value: 3,
            label: <MdOutlineFormatAlignRight size={18}/>,
        },
        {
            value: 4,
            label: <MdOutlineFormatAlignJustify size={18}/>,
        },
    ];
    return (
        <div className="flex justify-around items-center text-xs text-slate-700 w-full bg-transparent placeholder:text-slate-400 border border-slate-200 rounded-md px-2 py-0.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none">
            {buttons.map((i: any) => (
                <div
                    key={i.value}
                    className={classnames(
                        'px-3 py-1 cursor-pointer border border-transparent rounded-md',
                        {
                            'bg-slate-100 border !border-slate-400':
                                i.value === active,
                        },
                    )}
                    onClick={() => setActive(i.value)}
                >
                    {i.label}
                </div>
            ))}
        </div>
    );
};

export default ButtonGroupInput;
