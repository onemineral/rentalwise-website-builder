import React, { useEffect, useState } from 'react';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import FontInput from '@/components/Forms/Inputs/FontInput';
import {
    FontData,
    FontsResponse,
    getFontIdFromUrl,
} from '@/components/FontShowcase/FontShowcase';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import AlignButtonGroupInput from '@/components/Forms/Inputs/AlignButtonGroupInput';
import ItalicizeButtonGroupInput from '@/components/Forms/Inputs/ItalicizeButtonGroupInput';
import DecorationButtonGroupInput from '@/components/Forms/Inputs/DecorationButtonGroupInput';

const TypographyForm = ({
    record,
    onChange,
}: {
    record?: any;
    onChange?: (value: any) => void;
}) => {
    const [fonts, setFonts] = useState<[string, FontData][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [localSize, setLocalSize] = useState(record?.size);
    const [localHeight, setLocalHeight] = useState(record?.height);

    useEffect(() => {
        onChange?.({ size: localSize });
    }, [localSize]);

    useEffect(() => {
        onChange?.({ height: localHeight });
    }, [localHeight]);

    useEffect(() => {
        const fetchFonts = async () => {
            try {
                const response = await fetch('https://fonts.bunny.net/list');
                if (!response.ok) throw new Error('Failed to fetch fonts');
                const data: FontsResponse = await response.json();
                setFonts(Object.entries(data));
                setLoading(false);
            } catch (e: any) {
                console.error(e);
                setError('Failed to load fonts. Please try again.');
                setLoading(false);
            }
        };

        fetchFonts();
    }, []);

    const currentFont = fonts?.find(
        (item: any) =>
            record?.font && item[0] === getFontIdFromUrl(record?.font),
    );

    const weightOptions: any[] | undefined = currentFont?.[1].weights?.map(
        (weight: number) => ({
            label: weight,
            value: weight,
        }),
    );

    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-12'}>
                <FontInput
                    value={record.font}
                    onChange={(value: string) => {
                        onChange?.({
                            font: value,
                            weight: undefined,
                        });
                    }}
                    fonts={fonts}
                    loading={loading}
                    error={error}
                />
            </div>
            <div className={'col-span-12'}>
                <SelectInput
                    label={'Weight'}
                    value={record?.weight}
                    options={weightOptions}
                    onChange={(value: any) => {
                        onChange?.({ weight: value });
                    }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    type={'number'}
                    label={'Size'}
                    rightContent={
                        <SizeUnitInput
                            value={record?.size?.unit}
                            onChange={(value: string) => {
                                setLocalSize((prev: any) => ({
                                    ...prev,
                                    unit: value,
                                }));
                            }}
                        />
                    }
                    value={record?.size?.value}
                    onChange={(value: any) => {
                        setLocalSize((prev: any) => ({
                            value,
                            unit: prev?.unit || 'px',
                        }));
                    }}
                    classes={{ label: '!min-w-11 !w-11' }}
                />
            </div>
            <div className={'col-span-6'}>
                <TextInput
                    type={'number'}
                    label={'Height'}
                    rightContent={
                        <SizeUnitInput
                            value={record?.height?.unit}
                            onChange={(value: string) => {
                                setLocalHeight((prev: any) => ({
                                    ...prev,
                                    unit: value,
                                }));
                            }}
                        />
                    }
                    value={record?.height?.value}
                    onChange={(value: any) => {
                        setLocalHeight((prev: any) => ({
                            value,
                            unit: prev?.unit || 'px',
                        }));
                    }}
                    classes={{ label: '!min-w-11 !w-11' }}
                />
            </div>
            <div className={'col-span-12'}>
                <ColorInput
                    label={'Color'}
                    value={record.color}
                    onChange={(value: any) => {
                        onChange?.({ color: value });
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <AlignButtonGroupInput
                    label={'Align'}
                    value={record?.alignment}
                    onChange={(value: any) => {
                        onChange?.({ alignment: value });
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <ItalicizeButtonGroupInput
                    label={'Italicize'}
                    value={record?.style}
                    onChange={(value: any) => {
                        onChange?.({ style: value });
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <DecorationButtonGroupInput
                    label={'Decoration'}
                    value={record?.decoration}
                    onChange={(value: any) => {
                        onChange?.({ decoration: value });
                    }}
                />
            </div>
        </div>
    );
};

export default TypographyForm;
