import React, { useEffect, useState } from 'react';
import TextInput, { Left, Right } from '@/components/Forms/Inputs/TextInput';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import ButtonGroupInput from '@/components/Forms/Inputs/ButtonGroupInput';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import FontInput from '@/components/Forms/Inputs/FontInput';
import {
    FontData,
    FontsResponse,
} from '@/components/FontShowcase/FontShowcase';

const TypographyForm = () => {
    const [font, setFont] = useState<string | undefined>(undefined);

    const [fonts, setFonts] = useState<[string, FontData][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    return (
        <div className={'grid grid-cols-12 gap-1'}>
            <div className={'col-span-12 mb-6'}>
                <FontInput
                    value={font}
                    onChange={setFont}
                    fonts={fonts}
                    loading={loading}
                    error={error}
                />
            </div>

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
                        { icon: '10', value: '10' },
                        { icon: '20', value: '20' },
                    ]}
                />
            </div>
            <div className={'col-span-9'}>
                <SelectInput
                    options={[
                        { icon: 'item 1', value: 'item_1' },
                        { icon: 'item 2', value: 'item_2' },
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
    );
};

export default TypographyForm;
