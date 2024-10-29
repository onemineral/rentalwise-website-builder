import React from 'react';
import ButtonGroupInput, {
    ButtonGroupItem,
} from '@/components/Forms/Inputs/ButtonGroupInput';
import { ArrowDown, ArrowRight, WrapText } from 'lucide-react';

const FlexDirectionButtonGroupInput = ({
    value,
    onChange,
    label = 'Direction',
    classes,
}: {
    value?: any;
    onChange?: (value: any) => void;
    label?: string;
    classes?: any;
}) => {
    const buttons: ButtonGroupItem[] = [
        {
            value: 'horizontal',
            label: <ArrowRight size={14} />,
            description: 'Horizontal',
        },
        {
            value: 'vertical',
            label: <ArrowDown size={14} />,
            description: 'Vertical',
        },
        {
            value: 'wrap',
            label: <WrapText size={14} />,
            description: 'Wrap',
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

export default FlexDirectionButtonGroupInput;
