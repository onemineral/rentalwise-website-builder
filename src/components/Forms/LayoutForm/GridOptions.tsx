import React from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';

const GridOptions = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const { columns, rows } = record || {};

    return (
        <div className={'grid grid-cols-12 gap-x-2'}>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Cols'}
                    value={columns}
                    onChange={(value: any) => {
                        onChange?.({ ...record, columns: value });
                    }}
                    classes={{ label: '!min-w-12 !w-12' }}
                    type={'number'}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Rows'}
                    value={rows}
                    onChange={(value: any) => {
                        onChange?.({ ...record, rows: value });
                    }}
                    classes={{ label: '!min-w-12 !w-12' }}
                    type={'number'}
                />
            </div>
        </div>
    );
};

export default GridOptions;
