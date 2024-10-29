import React from 'react';
import FlexDirectionButtonGroupInput from '@/components/Forms/Inputs/FlexDirectionButtonGroupInput';
import classnames from 'classnames';
import SelectInput from '@/components/Forms/Inputs/SelectInput';

const FlexOptions = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const alignOptions: any = {
        horizontal: {
            x: [
                {
                    label: 'Left',
                    value: 'left',
                },
                {
                    label: 'Center',
                    value: 'center',
                },
                {
                    label: 'Right',
                    value: 'right',
                },
                {
                    label: 'Space between',
                    value: 'space-between',
                },
                {
                    label: 'Space around',
                    value: 'space-around',
                },
            ],
            y: [
                {
                    label: 'Top',
                    value: 'top',
                },
                {
                    label: 'Center',
                    value: 'center',
                },
                {
                    label: 'Bottom',
                    value: 'bottom',
                },
                {
                    label: 'Stretch',
                    value: 'stretch',
                },
                {
                    label: 'Baseline',
                    value: 'baseline',
                },
            ],
        },
        vertical: {
            x: [
                {
                    label: 'Left',
                    value: 'left',
                },
                {
                    label: 'Center',
                    value: 'center',
                },
                {
                    label: 'Right',
                    value: 'right',
                },
                {
                    label: 'Stretch',
                    value: 'stretch',
                },
                {
                    label: 'Baseline',
                    value: 'baseline',
                },
            ],
            y: [
                {
                    label: 'Top',
                    value: 'top',
                },
                {
                    label: 'Center',
                    value: 'center',
                },
                {
                    label: 'Bottom',
                    value: 'bottom',
                },
                {
                    label: 'Space between',
                    value: 'space-between',
                },
                {
                    label: 'Space around',
                    value: 'space-around',
                },
            ],
        },
    };

    const { direction, horizontal, vertical } = record || {};

    return (
        <div className={'space-y-1'}>
            <FlexDirectionButtonGroupInput
                value={direction}
                onChange={(value: string) => {
                    onChange?.({ ...record, direction: value });
                }}
            />

            <div className={classnames('relative flex w-full items-center')}>
                <label
                    className={classnames(
                        'text-xs flex items-center min-w-20 w-20 p-1',
                    )}
                >
                    Align
                </label>
                <div className={'flex flex-col w-full space-y-1'}>
                    <SelectInput
                        label={'X'}
                        classes={{ label: '!min-w-6 !w-6' }}
                        value={horizontal}
                        options={alignOptions?.[direction]?.x}
                        onChange={(value: any) => {
                            onChange?.({
                                ...record,
                                horizontal: value,
                            });
                        }}
                    />
                    <SelectInput
                        label={'Y'}
                        classes={{ label: '!min-w-6 !w-6' }}
                        value={vertical}
                        options={alignOptions?.[direction]?.y}
                        onChange={(value: any) => {
                            onChange?.({
                                ...record,
                                vertical: value,
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlexOptions;
