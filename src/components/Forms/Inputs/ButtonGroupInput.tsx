import React, { useState } from 'react';
import classnames from 'classnames';
import {
    PiTextAlignCenterThin,
    PiTextAlignJustify,
    PiTextAlignJustifyThin,
    PiTextAlignLeftThin,
    PiTextAlignRightThin,
} from 'react-icons/pi';
import {
    FiAlignCenter,
    FiAlignJustify,
    FiAlignLeft,
    FiAlignRight,
} from 'react-icons/fi';

const ButtonGroupInput = () => {
    const [active, setActive] = useState(3);
    const buttons: any = [
        {
            value: 1,
            label: <FiAlignLeft size={14} />,
        },
        {
            value: 2,
            label: <FiAlignCenter size={14} />,
        },
        {
            value: 3,
            label: <FiAlignRight size={14} />,
        },
        {
            value: 4,
            label: <FiAlignJustify size={14} />,
        },
    ];
    return (
        <div className="flex justify-around items-center text-xs text-slate-700 w-full bg-transparent placeholder:text-slate-400 border border-slate-200 rounded-md px-2 py-0.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow focus-visible:ring-0 focus-visible:outline-none">
            {buttons.map((i: any) => (
                <div
                    key={i.value}
                    className={classnames(
                        'px-2 py-1 cursor-pointer border border-transparent rounded-md',
                        {
                            'bg-white border !border-slate-400':
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
