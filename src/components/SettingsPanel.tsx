import React from 'react';
import TextInput, { Left, Right } from '@/components/Forms/Inputs/TextInput';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import ButtonGroupInput from '@/components/Forms/Inputs/ButtonGroupInput';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import Accordion from '@/components/Accordion/Accordion';

const SettingsPanel = () => {
    return (
        <div
            className={
                'flex flex-col items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
                <Accordion.Item title={'Spacing'}>
                    <div className={'grid grid-cols-12 gap-1'}>
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
                        <div className={'col-span-3'}>
                            <SelectInput
                                options={[
                                    { label: '10', value: '10' },
                                    { label: '20', value: '20' },
                                ]}
                            />
                        </div>
                        <div className={'col-span-9'}>
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
                        <div className={'col-span-12'}>
                            <ColorInput />
                        </div>
                    </div>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default SettingsPanel;
