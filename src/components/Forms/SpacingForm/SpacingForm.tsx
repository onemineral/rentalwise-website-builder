import React, { useEffect, useState } from 'react';
import BorderButtonGroupInput from '@/components/Forms/Inputs/BorderButtonGroupInput';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';

const SpacingForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const [marginType, setMarginType] = useState('all');
    const [localMargin, setLocalMargin] = useState(record?.margin);

    const [paddingType, setPaddingType] = useState('all');
    const [localPadding, setLocalPadding] = useState(record?.padding);

    useEffect(() => {
        onChange?.({
            ...record,
            margin: localMargin,
        });
    }, [localMargin]);

    useEffect(() => {
        onChange?.({
            ...record,
            padding: localPadding,
        });
    }, [localPadding]);

    const {
        top: marginTop,
        right: marginRight,
        bottom: marginBottom,
        left: marginLeft,
    } = localMargin || {};

    const {
        top: paddingTop,
        right: paddingRight,
        bottom: paddingBottom,
        left: paddingLeft,
    } = localPadding || {};

    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-4'}>
                <BorderButtonGroupInput
                    label={'Margin'}
                    value={marginType}
                    onChange={setMarginType}
                />
            </div>
            {marginType === 'all' && (
                <div className={'col-span-8 flex items-center'}>
                    <TextInput
                        label={'All'}
                        rightContent={<SizeUnitInput value={'px'} />}
                        value={marginTop}
                        onChange={(value: any) =>
                            setLocalMargin({
                                top: value,
                                right: value,
                                bottom: value,
                                left: value,
                            })
                        }
                        classes={{
                            container: 'flex-col',
                            label: '!w-full',
                            input: '!pr-1.5',
                        }}
                    />
                </div>
            )}
            {marginType === 'corners' && (
                <div className={'col-span-8'}>
                    <div className={'grid grid-cols-2 gap-1'}>
                        <TextInput
                            label={'Left'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={marginLeft}
                            onChange={(value: any) =>
                                setLocalMargin({ ...localMargin, left: value })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Right'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={marginRight}
                            onChange={(value: any) =>
                                setLocalMargin({ ...localMargin, right: value })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Top'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={marginTop}
                            onChange={(value: any) =>
                                setLocalMargin({ ...localMargin, top: value })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Bottom'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={marginBottom}
                            onChange={(value: any) =>
                                setLocalMargin({
                                    ...localMargin,
                                    bottom: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                    </div>
                </div>
            )}

            <div className={'col-span-4'}>
                <BorderButtonGroupInput
                    label={'Padding'}
                    value={paddingType}
                    onChange={setPaddingType}
                />
            </div>
            {paddingType === 'all' && (
                <div className={'col-span-8 flex items-center'}>
                    <TextInput
                        label={'All'}
                        rightContent={<SizeUnitInput value={'px'} />}
                        value={paddingTop}
                        onChange={(value: any) =>
                            setLocalPadding({
                                top: value,
                                right: value,
                                bottom: value,
                                left: value,
                            })
                        }
                        classes={{
                            container: 'flex-col',
                            label: '!w-full',
                            input: '!pr-1.5',
                        }}
                    />
                </div>
            )}
            {paddingType === 'corners' && (
                <div className={'col-span-8'}>
                    <div className={'grid grid-cols-2 gap-1'}>
                        <TextInput
                            label={'Left'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={paddingLeft}
                            onChange={(value: any) =>
                                setLocalPadding({
                                    ...localPadding,
                                    left: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Right'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={paddingRight}
                            onChange={(value: any) =>
                                setLocalPadding({
                                    ...localPadding,
                                    right: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Top'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={paddingTop}
                            onChange={(value: any) =>
                                setLocalPadding({ ...localPadding, top: value })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                        <TextInput
                            label={'Bottom'}
                            rightContent={<SizeUnitInput value={'px'} />}
                            value={paddingBottom}
                            onChange={(value: any) =>
                                setLocalPadding({
                                    ...localPadding,
                                    bottom: value,
                                })
                            }
                            classes={{
                                container: 'flex-col',
                                label: '!w-full',
                                input: '!pr-1.5',
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpacingForm;
