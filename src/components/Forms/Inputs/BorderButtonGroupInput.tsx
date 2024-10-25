import React from 'react';
import {
    FiAlignCenter,
    FiAlignJustify,
    FiAlignLeft,
    FiAlignRight,
} from 'react-icons/fi';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';
import classnames from 'classnames';
import { TbBorderAll, TbBorderCorners } from 'react-icons/tb';

const BorderButtonGroupInput = ({
    value,
    onChange,
    label,
    classes,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
}) => {
    const buttons: ButtonGroupItem[] = [
        {
            value: 'all',
            icon: <TbBorderAll size={14} />,
        },
        {
            value: 'corners',
            icon: <TbBorderCorners size={14} />,
        },
    ];

    return (
        <div className={classnames('relative flex flex-col w-full items-start')}>
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
            <ButtonGroupInput
                buttons={buttons}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default BorderButtonGroupInput;
