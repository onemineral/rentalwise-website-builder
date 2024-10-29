import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';
import {
    EyeOpenIcon,
    EyeNoneIcon,
    ClipboardIcon,
    CropIcon,
    DoubleArrowDownIcon,
} from '@radix-ui/react-icons';

const OverflowButtonGroupInput = ({
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
            value: 'visible',
            label: <EyeOpenIcon />,
            description: 'Visible',
        },
        {
            value: 'hidden',
            label: <EyeNoneIcon />,
            description: 'Hidden',
        },
        {
            value: 'clip',
            label: <CropIcon />,
            description: 'Clip',
        },
        {
            value: 'scroll',
            label: <DoubleArrowDownIcon />,
            description: 'Scroll',
        },
        {
            value: 'auto',
            label: <span className={'text-xs'}>Auto</span>,
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

export default OverflowButtonGroupInput;
