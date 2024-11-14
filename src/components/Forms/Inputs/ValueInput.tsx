import React, { useEffect, useState } from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import { SIZE_UNITS } from '@/components/types';

const ValueInput = ({
    label,
    value,
    options = [
        ...SIZE_UNITS,
        {
            value: 'auto',
            label: 'Auto',
            triggerLabel: '–',
        },
    ],
    onChange,
    placeholder = 'auto',
    classes = {
        label: '!min-w-12 !w-12',
    },
    disableUnitSelection = false,
}: {
    label?: string;
    value?: any;
    options?: any[];
    onChange?: (value: any) => void;
    placeholder?: string;
    classes?: any;
    disableUnitSelection?: boolean;
}) => {
    const [localValue, setLocalValue] = useState<any>(value);

    useEffect(() => {
        if (localValue?.value && !Number(localValue?.value)) {
            const newValue = {
                ...localValue,
                value: undefined,
            };
            setLocalValue(newValue);
            onChange?.(newValue);
        }

        if (
            localValue?.value &&
            Number(localValue?.value) &&
            localValue?.unit === 'auto'
        ) {
            const newValue = {
                ...localValue,
                unit: 'px',
            };
            setLocalValue(newValue);
            onChange?.(newValue);
        }

        if (
            !localValue?.value &&
            options.find((item: any) => item.value === 'auto') &&
            localValue?.unit !== 'auto'
        ) {
            const newValue = {
                ...localValue,
                unit: 'auto',
            };
            setLocalValue(newValue);
            onChange?.(newValue);
        }
    }, [localValue]);

    return (
        <TextInput
            label={label}
            value={localValue?.value}
            placeholder={placeholder}
            rightContent={
                <SizeUnitInput
                    value={localValue?.unit}
                    onChange={!disableUnitSelection ? (value: any) => {
                        const newValue = { ...localValue, unit: value };
                        setLocalValue(newValue);
                        onChange?.(newValue);
                    } : undefined}
                    options={options}
                />
            }
            classes={classes}
            onChange={(value: any) => {
                const newValue = {
                    value: value || undefined,
                    unit: localValue?.unit || 'px',
                };

                setLocalValue(newValue);
                onChange?.(newValue);
            }}
        />
    );
};

export default ValueInput;
