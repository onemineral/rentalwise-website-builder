import React from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import OverflowButtonGroupInput from '@/components/Forms/Inputs/OverflowButtonGroupInput';

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
                <TextInput
                    label={'Width'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Height'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Min W'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Min H'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Max W'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    label={'Max H'}
                    rightContent={<SizeUnitInput value={'px'} />}
                    classes={{ label: '!min-w-12 !w-12' }}
                />
            </div>
            <div className={'col-span-12'}>
                <OverflowButtonGroupInput label={'Overflow'} classes={{label: '!min-w-14 !w-14'}}/>
            </div>
        </div>
    );
};

export default SizeForm;
