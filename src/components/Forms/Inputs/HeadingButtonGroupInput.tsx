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

const HeadingButtonGroupInput = ({
    value,
    onChange,
    label = 'Heading',
    classes,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
}) => {
    const buttons: ButtonGroupItem[] = [
        {
            value: 'h1',
            label: 'H1',
        },
        {
            value: 'h2',
            label: 'H2',
        },
        {
            value: 'h3',
            label: 'H3',
        },
        {
            value: 'h4',
            label: 'H4',
        },
        {
            value: 'h5',
            label: 'H5',
        },
        {
            value: 'h6',
            label: 'H6',
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

export default HeadingButtonGroupInput;
