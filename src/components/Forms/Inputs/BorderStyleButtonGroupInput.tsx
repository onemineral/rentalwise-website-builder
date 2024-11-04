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
import { Cross } from 'lucide-react';
import {
    BorderDashedIcon,
    BorderDottedIcon,
    BorderNoneIcon,
    BorderSolidIcon,
} from '@radix-ui/react-icons';

const BorderStyleButtonGroupInput = ({
    value,
    onChange,
    label = 'Style',
    classes,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
}) => {
    const buttons: ButtonGroupItem[] = [
        {
            value: 'solid',
            label: <BorderSolidIcon />,
            description: 'Solid',
        },
        {
            value: 'dashed',
            label: <BorderDashedIcon />,
            description: 'Dashed',
        },
        {
            value: 'dotted',
            label: <BorderDottedIcon />,
            description: 'Dotted',
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

export default BorderStyleButtonGroupInput;
