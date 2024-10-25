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

const ItalicizeButtonGroupInput = ({
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
            value: 'normal',
            icon: <BsType size={14} />,
            description: 'Regular',
        },
        {
            value: 'italic',
            icon: <BsTypeItalic size={14} />,
            description: 'Italic',
        },
    ];

    return (
        <div className={classnames('relative flex w-full items-center')}>
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

export default ItalicizeButtonGroupInput;
