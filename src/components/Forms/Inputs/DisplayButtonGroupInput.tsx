import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';

const DisplayButtonGroupInput = ({
    value,
    onChange,
    label = 'Display',
    classes,
    exclude,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
    exclude?: string[];
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
        {
            value: 'inline',
            label: <span>Inline</span>,
        },
    ];

    return (
        <ButtonGroupInput
            label={label}
            buttons={buttons.filter(
                (item: any) => !exclude?.includes(item.value),
            )}
            value={value}
            onChange={onChange}
            classes={classes}
        />
    );
};

export default DisplayButtonGroupInput;
