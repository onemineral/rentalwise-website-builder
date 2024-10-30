import React from 'react';
import { Dropdown } from '@/components/Dropdown';
import ActionList from '@/components/ActionList/ActionList';
import { SIZE_UNITS } from '@/components/types';

const SizeUnitInput = ({
    value = 'px',
    onChange,
    options = SIZE_UNITS,
}: {
    value: any;
    onChange?: (value: string) => void;
    options?: { value: any; label: string; triggerLabel?: string }[];
}) => {
    const item = options.find((item) => item.value === value);

    if (!onChange) {
        return (
            <span className={'text-xs text-slate-400'}>
                {item?.value || item?.label}
            </span>
        );
    }

    return (
        <Dropdown
            trigger={
                <span className={'text-xs text-slate-400'}>
                    {item?.triggerLabel || item?.value || item?.label}
                </span>
            }
        >
            <ActionList className={'!min-w-16'}>
                {options.map((item: any, index) => (
                    <ActionList.Item
                        key={index}
                        onClick={() => onChange?.(item.value)}
                    >
                        {item.label}
                    </ActionList.Item>
                ))}
            </ActionList>
        </Dropdown>
    );
};

export default SizeUnitInput;
