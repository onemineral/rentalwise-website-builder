import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';
import {
    RiCloseFill,
    RiOverline,
    RiStrikethrough2,
    RiUnderline,
} from 'react-icons/ri';

const DecorationButtonGroupInput = ({
    value,
    onChange,
    label = 'Decoration',
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
            label: <RiCloseFill size={14} />,
            description: 'None',
        },
        {
            value: 'line-through',
            label: <RiStrikethrough2 size={14} />,
            description: 'Strikethrough',
        },
        {
            value: 'underline',
            label: <RiUnderline size={14} />,
            description: 'Underline',
        },
        {
            value: 'overline',
            label: <RiOverline size={14} />,
            description: 'Overline',
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

export default DecorationButtonGroupInput;
