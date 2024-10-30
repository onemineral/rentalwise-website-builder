import React, { useEffect, useState } from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import { SIZE_UNITS } from '@/components/types';

const ValueInput = ({
    label,
    value,
    onChange,
}: {
    label?: string;
    value?: any;
    onChange?: (value: any) => void;
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

        if (!localValue?.value && localValue?.unit !== 'auto') {
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
            placeholder={'auto'}
            rightContent={
                <SizeUnitInput
                    value={localValue?.unit}
                    onChange={(value: any) => {
                        const newValue = { ...localValue, unit: value };
                        setLocalValue(newValue);
                        onChange?.(newValue);
                    }}
                    options={[
                        ...SIZE_UNITS,
                        {
                            value: 'auto',
                            label: 'Auto',
                            triggerLabel: '–',
                        },
                    ]}
                />
            }
            classes={{ label: '!min-w-12 !w-12' }}
            onChange={(value: any) => {
                const newValue = {
                    value: value || undefined,
                    unit: localValue?.unit,
                };

                setLocalValue(newValue);
                onChange?.(newValue);
            }}
        />
    );
};

export default ValueInput;
