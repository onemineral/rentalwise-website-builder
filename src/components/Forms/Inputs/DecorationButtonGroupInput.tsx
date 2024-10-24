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
import { BsType, BsTypeItalic } from 'react-icons/bs';
import {
    RiCloseFill,
    RiOverline,
    RiStrikethrough2,
    RiUnderline,
} from 'react-icons/ri';

const DecorationButtonGroupInput = ({
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
            value: 'none',
            icon: <RiCloseFill size={14} />,
            description: 'None',
        },
        {
            value: 'line-through',
            icon: <RiStrikethrough2 size={14} />,
            description: 'Strikethrough',
        },
        {
            value: 'underline',
            icon: <RiUnderline size={14} />,
            description: 'Underline',
        },
        {
            value: 'overline',
            icon: <RiOverline size={14} />,
            description: 'Overline',
        },
    ];

    return (
        <div className={classnames('relative flex w-full items-center')}>
            {label && (
                <label
                    className={classnames(
                        'text-xs flex items-center min-w-16 w-16 p-1',
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

export default DecorationButtonGroupInput;
