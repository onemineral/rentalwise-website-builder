import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';

const DisplayButtonGroupInput = ({
    value,
    onChange,
    label = 'Display',
    classes,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
}) => {
    const buttons: ButtonGroupItem[] = [
        {
            value: 'block',
            label: <span>Block</span>,
        },
        {
            value: 'flex',
            label: <span>Flex</span>,
        },
        {
            value: 'grid',
            label: <span>Grid</span>,
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

export default DisplayButtonGroupInput;
