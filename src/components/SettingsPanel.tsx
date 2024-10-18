import React from 'react';
import TextInput, { Left, Right } from '@/components/settings/inputs/TextInput';
import SelectInput from '@/components/settings/inputs/SelectInput';
import ButtonGroupInput from '@/components/settings/inputs/ButtonGroupInput';

const SettingsPanel = () => {
    return (
        <div
            className={
                'flex flex-col items-start bg-slate-50 h-full max-w-72 select-none'
            }
        >
            <div className={'bg-slate-100 w-full p-2'}>
                <h1>Settings</h1>
            </div>
            <div className={'p-2 grid grid-cols-12 gap-1'}>
                <div className={'col-span-6'}>
                    <TextInput
                        type={'number'}
                        rightContent={<Right />}
                        value={12}
                    />
                </div>
                <div className={'col-span-6'}>
                    <TextInput
                        type={'number'}
                        rightContent={<Right />}
                        value={24}
                    />
                </div>
                <div className={'col-span-3'}>
                    <TextInput />
                </div>
                <div className={'col-span-9'}>
                    <TextInput type={'number'} leftContent={<Left />} />
                </div>
                <div className={'col-span-12'}>
                    <TextInput
                        type={'number'}
                        leftContent={<Left />}
                        rightContent={<Right />}
                    />
                </div>
                <div className={'col-span-12'}>
                    <SelectInput
                        options={[
                            { label: 'item 1', value: 'item_1' },
                            { label: 'item 2', value: 'item_2' },
                        ]}
                    />
                </div>
                <div className={'col-span-12'}>
                    <ButtonGroupInput />
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;
