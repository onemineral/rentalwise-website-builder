import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';
import { BsType, BsTypeItalic } from 'react-icons/bs';

const ItalicizeButtonGroupInput = ({
    value,
    onChange,
    label = 'Italicize',
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
            label: <BsType size={14} />,
            description: 'Regular',
        },
        {
            value: 'italic',
            label: <BsTypeItalic size={14} />,
            description: 'Italic',
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

export default ItalicizeButtonGroupInput;
