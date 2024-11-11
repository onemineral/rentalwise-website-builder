import React from 'react';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import TextInput from '@/components/Forms/Inputs/TextInput';

const BackgroundForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-12'}>
                <ColorInput
                    label={'Color'}
                    value={record?.color}
                    onChange={(value: any) => {
                        onChange?.({
                            ...record,
                            color: value,
                        });
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <TextInput label={'Image'} disabled />
            </div>
        </div>
    );
};

export default BackgroundForm;
