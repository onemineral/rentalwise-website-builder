import React from 'react';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import ValueInput from '@/components/Forms/Inputs/ValueInput';

const PositionForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-12'}>
                <SelectInput
                    label={'Position'}
                    value={record?.position}
                    options={[
                        {
                            label: 'Static',
                            value: 'static',
                        },
                        {
                            label: 'Relative',
                            value: 'relative',
                        },
                        {
                            label: 'Absolute',
                            value: 'absolute',
                        },
                        {
                            label: 'Fixed',
                            value: 'fixed',
                        },
                        {
                            label: 'Sticky',
                            value: 'sticky',
                        },
                    ]}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            position: value,
                        });
                    }}
                />
            </div>
            {record?.position !== 'static' && (
                <>
                    <div className={'col-span-6'}>
                        <ValueInput
                            label={'Left'}
                            value={record?.left}
                            onChange={(value: any) => {
                                onChange?.({
                                    ...record,
                                    left: value,
                                });
                            }}
                            placeholder={'auto'}
                        />
                    </div>
                    <div className={'col-span-6'}>
                        <ValueInput
                            label={'Right'}
                            value={record?.right}
                            onChange={(value: any) => {
                                onChange?.({
                                    ...record,
                                    right: value,
                                });
                            }}
                            placeholder={'auto'}
                        />
                    </div>
                    <div className={'col-span-6'}>
                        <ValueInput
                            label={'Top'}
                            value={record?.top}
                            onChange={(value: any) => {
                                onChange?.({
                                    ...record,
                                    top: value,
                                });
                            }}
                            placeholder={'auto'}
                        />
                    </div>
                    <div className={'col-span-6'}>
                        <ValueInput
                            label={'Bottom'}
                            value={record?.bottom}
                            onChange={(value: any) => {
                                onChange?.({
                                    ...record,
                                    bottom: value,
                                });
                            }}
                            placeholder={'auto'}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default PositionForm;
