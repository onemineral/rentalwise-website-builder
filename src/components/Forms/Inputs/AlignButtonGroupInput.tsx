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

const AlignButtonGroupInput = ({
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
            value: 'left',
            icon: <FiAlignLeft size={14} />,
            description: 'Left',
        },
        {
            value: 'center',
            icon: <FiAlignCenter size={14} />,
            description: 'Center',
        },
        {
            value: 'right',
            icon: <FiAlignRight size={14} />,
            description: 'Right',
        },
        {
            value: 'justify',
            icon: <FiAlignJustify size={14} />,
            description: 'Justify',
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

export default AlignButtonGroupInput;
