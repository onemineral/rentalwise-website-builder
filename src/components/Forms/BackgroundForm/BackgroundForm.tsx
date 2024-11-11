import React from 'react';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import ImageInput from '@/components/Forms/Inputs/ImageInput';

const BackgroundForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const showImageGallery = () => {
        console.log('Show Image Gallery');
    };

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
                <ImageInput placeholder={'select'} value={'example.jpg'}/>
            </div>
        </div>
    );
};

export default BackgroundForm;
