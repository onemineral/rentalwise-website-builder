import React, { useCallback, useEffect, useState } from 'react';
import {
    BorderAllIcon,
    BorderBottomIcon,
    BorderLeftIcon,
    BorderRightIcon,
    BorderTopIcon,
} from '@radix-ui/react-icons';
import BorderStyleButtonGroupInput from '@/components/Forms/Inputs/BorderStyleButtonGroupInput';
import ValueInput from '@/components/Forms/Inputs/ValueInput';
import { SIZE_UNITS } from '@/components/types';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import PositionIcon from '@/components/Forms/BorderForm/PositionIcon';
import BorderButtonGroupInput from '@/components/Forms/Inputs/BorderButtonGroupInput';

const BorderForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const [roundedType, setRoundedType] = useState('all');
    const [localRounded, setLocalRounded] = useState(record?.rounded);

    const { topLeft, topRight, bottomLeft, bottomRight } = localRounded || {};

    const defaultBorder = {
        style: 'solid',
        color: 'black',
        width: {
            value: '1',
            unit: 'px',
        },
    };

    useEffect(() => {
        onChange?.({
            ...record,
            rounded: localRounded,
        });
    }, [localRounded]);

    const onPositionClick = useCallback(
        (position: 'top' | 'bottom' | 'left' | 'right') => {
            const newValue: any = Object.assign({}, record);

            if (!!newValue?.[position]) {
                delete newValue[position];
            } else {
                newValue[position] = defaultBorder;
            }
            onChange?.(newValue);
        },
        [record],
    );

    const onFieldChange = useCallback(
        (field: string, value: string) => {
            onChange?.({
                top: {
                    ...record?.top,
                    [field]: value,
                },
                bottom: {
                    ...record?.bottom,
                    [field]: value,
                },
                left: {
                    ...record?.left,
                    [field]: value,
                },
                right: {
                    ...record?.right,
                    [field]: value,
                },
            });
        },
        [record],
    );

    return (
        <div className={'grid grid-cols-12 gap-1 items-center'}>
            <div className={'col-span-4'}>
                <BorderButtonGroupInput
                    label={'Rounded'}
                    value={roundedType}
                    onChange={setRoundedType}
                    classes={{ container: 'flex-col' }}
                />
            </div>
            {roundedType === 'all' && (
                <div className={'col-span-8 flex items-center'}>
                    <ValueInput
                        label={'All'}
                        value={topLeft}
                        options={SIZE_UNITS}
                        onChange={(value: any) =>
                            setLocalRounded({
                                topLeft: value,
                                topRight: value,
                                bottomLeft: value,
                                bottomRight: value,
                            })
                        }
                        classes={{
                            container: 'flex-col',
                            label: '!w-full',
                            input: '!pr-1.5',
                        }}
                        disableUnitSelection
                    />
                </div>
            )}
            {roundedType === 'corners' && (
                <div className={'col-span-8'}>
                    <div className={'grid grid-cols-2 gap-1'}>
                        <ValueInput
                            label={'TLeft'}
                            value={topLeft}
                            options={SIZE_UNITS}
                            onChange={(value: any) =>
                                setLocalRounded({
                                    ...localRounded,
                                    topLeft: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                            disableUnitSelection
                        />
                        <ValueInput
                            label={'TRight'}
                            value={topRight}
                            options={SIZE_UNITS}
                            onChange={(value: any) =>
                                setLocalRounded({
                                    ...localRounded,
                                    topRight: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                            disableUnitSelection
                        />
                        <ValueInput
                            label={'BLeft'}
                            value={bottomLeft}
                            options={SIZE_UNITS}
                            onChange={(value: any) =>
                                setLocalRounded({
                                    ...localRounded,
                                    bottomLeft: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                            disableUnitSelection
                        />
                        <ValueInput
                            label={'BRight'}
                            value={bottomRight}
                            options={SIZE_UNITS}
                            onChange={(value: any) =>
                                setLocalRounded({
                                    ...localRounded,
                                    bottomRight: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                            disableUnitSelection
                        />
                    </div>
                </div>
            )}
            <div className={'col-span-4'}>
                <div className={'grid grid-cols-3 grid-rows-3 gap-1.5 mr-1'}>
                    <div />
                    <PositionIcon
                        description={'Top'}
                        active={!!record?.top}
                        onClick={() => onPositionClick('top')}
                    >
                        <BorderTopIcon width={18} height={18} />
                    </PositionIcon>
                    <div />
                    <PositionIcon
                        description={'Left'}
                        active={!!record?.left}
                        onClick={() => onPositionClick('left')}
                    >
                        <BorderLeftIcon width={18} height={18} />
                    </PositionIcon>
                    <PositionIcon
                        description={'All'}
                        active={
                            record?.top &&
                            record?.bottom &&
                            record?.left &&
                            record?.right
                        }
                        onClick={() => {
                            onChange?.({
                                top: defaultBorder,
                                bottom: defaultBorder,
                                left: defaultBorder,
                                right: defaultBorder,
                            });
                        }}
                    >
                        <BorderAllIcon width={18} height={18} />
                    </PositionIcon>
                    <PositionIcon
                        description={'Right'}
                        active={!!record?.right}
                        onClick={() => onPositionClick('right')}
                    >
                        <BorderRightIcon width={18} height={18} />
                    </PositionIcon>
                    <div />
                    <PositionIcon
                        description={'Bottom'}
                        active={!!record?.bottom}
                        onClick={() => onPositionClick('bottom')}
                    >
                        <BorderBottomIcon width={18} height={18} />
                    </PositionIcon>
                    <div />
                </div>
            </div>
            <div className={'col-span-8'}>
                <div className={'flex flex-col space-y-1'}>
                    <BorderStyleButtonGroupInput
                        classes={{ label: '!min-w-10 !w-10' }}
                        value={
                            record?.top?.style ||
                            record?.bottom?.style ||
                            record?.left?.style ||
                            record?.right?.style
                        }
                        onChange={(value: string) =>
                            onFieldChange('style', value)
                        }
                    />
                    <ValueInput
                        classes={{ label: '!min-w-10 !w-10' }}
                        label={'Width'}
                        options={SIZE_UNITS}
                        value={
                            record?.top?.width ||
                            record?.bottom?.width ||
                            record?.left?.width ||
                            record?.right?.width
                        }
                        onChange={(value: string) =>
                            onFieldChange('width', value)
                        }
                    />
                    <ColorInput
                        classes={{ label: '!min-w-10 !w-10' }}
                        value={
                            record?.top?.color ||
                            record?.bottom?.color ||
                            record?.left?.color ||
                            record?.right?.color
                        }
                        onChange={(value: string) =>
                            onFieldChange('color', value)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default BorderForm;
