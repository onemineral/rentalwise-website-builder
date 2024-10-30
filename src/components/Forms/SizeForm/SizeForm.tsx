import React from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import OverflowButtonGroupInput from '@/components/Forms/Inputs/OverflowButtonGroupInput';
import ValueInput from '@/components/Forms/Inputs/ValueInput';

const SizeForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Width'}
                    value={record.width}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            width: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Height'}
                    value={record.height}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            height: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Min W'}
                    value={record.minWidth}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            minWidth: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Min H'}
                    value={record.minHeight}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            minHeight: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Max W'}
                    value={record.maxWidth}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            maxWidth: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <ValueInput
                    label={'Max H'}
                    value={record.maxHeight}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            maxHeight: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <OverflowButtonGroupInput
                    label={'Overflow'}
                    classes={{ label: '!min-w-16 !w-16' }}
                    value={record.overflow}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            overflow: value,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default SizeForm;
