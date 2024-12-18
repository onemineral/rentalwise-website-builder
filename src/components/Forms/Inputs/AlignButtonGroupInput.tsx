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

const AlignButtonGroupInput = ({
    value,
    onChange,
    label = 'Align',
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
            label: <FiAlignLeft size={14} />,
            description: 'Left',
        },
        {
            value: 'center',
            label: <FiAlignCenter size={14} />,
            description: 'Center',
        },
        {
            value: 'right',
            label: <FiAlignRight size={14} />,
            description: 'Right',
        },
        {
            value: 'justify',
            label: <FiAlignJustify size={14} />,
            description: 'Justify',
        },
    ];

    return (
        <ButtonGroupInput
            label={label}
            buttons={buttons}
            value={value}
            onChange={onChange}
            classes={classes}
        />
    );
};

export default AlignButtonGroupInput;
