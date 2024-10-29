import React from 'react';
import DisplayButtonGroupInput from '@/components/Forms/Inputs/DisplayButtonGroupInput';
import FlexOptions from '@/components/Forms/LayoutForm/FlexOptions';
import GridOptions from '@/components/Forms/LayoutForm/GridOptions';

const LayoutForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const { display, flexOptions, gridOptions } = record || {};

    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-12'}>
                <DisplayButtonGroupInput
                    value={display}
                    onChange={(value: string) => {
                        onChange?.({ ...record, display: value });
                    }}
                />
            </div>
            {record?.display === 'flex' && (
                <div className={'col-span-12'}>
                    <FlexOptions
                        record={flexOptions}
                        onChange={(value: any) => {
                            onChange?.({
                                ...record,
                                flexOptions: value,
                            });
                        }}
                    />
                </div>
            )}
            {record?.display === 'grid' && (
                <div className={'col-span-12'}>
                    <GridOptions
                        record={gridOptions}
                        onChange={(value: any) => {
                            onChange?.({ ...record, gridOptions: value });
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default LayoutForm;
