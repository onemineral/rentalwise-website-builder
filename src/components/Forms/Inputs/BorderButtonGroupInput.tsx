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
            label: <TbBorderAll size={14} />,
        },
        {
            value: 'corners',
            label: <TbBorderCorners size={14} />,
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

export default BorderButtonGroupInput;
