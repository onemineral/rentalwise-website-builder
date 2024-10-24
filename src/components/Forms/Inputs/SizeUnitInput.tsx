import React from 'react';
import { Dropdown } from '@/components/Dropdown';
import ActionList from '@/components/ActionList/ActionList';
import { SIZE_UNITS } from '@/components/types';

const SizeUnitInput = ({
    value,
    onChange,
}: {
    value: any;
    onChange?: (value: string) => void;
}) => {
    const item = SIZE_UNITS.find((item) => item.value === value);

    return (
        <Dropdown
            trigger={
                <span className={'text-xs text-slate-400'}>
                    {item?.value || item?.label}
                </span>
            }
        >
            <ActionList className={'!min-w-16'}>
                {SIZE_UNITS.map((item: any, index) => (
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
