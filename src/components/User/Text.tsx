import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNode, Node } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';
import TextInput from '@/components/Forms/Inputs/TextInput';
import Accordion from '@/components/Accordion/Accordion';
import FontInput from '@/components/Forms/Inputs/FontInput';
import {
    FontData,
    FontsResponse,
    getFontIdFromUrl,
} from '@/components/FontShowcase/FontShowcase';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import SizeUnitInput from '@/components/Forms/Inputs/SizeUnitInput';
import ColorInput from '@/components/Forms/Inputs/ColorInput';
import AlignButtonGroupInput from '@/components/Forms/Inputs/AlignButtonGroupInput';
import ItalicizeButtonGroupInput from '@/components/Forms/Inputs/ItalicizeButtonGroupInput';
import DecorationButtonGroupInput from '@/components/Forms/Inputs/DecorationButtonGroupInput';

export const Text = ({
    text,
    font,
    weight,
    size,
    height,
    color,
    alignment,
    style,
    decoration,
}: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        label: node.data.displayName,
        id: node.id,
    }));

    const linkRef = useRef<HTMLLinkElement | null>(null);

    useEffect(() => {
        if (!linkRef.current && font) {
            const link = document.createElement('link');
            const fontName = encodeURIComponent(getFontIdFromUrl(font!) || '');
            link.href = `https://fonts.bunny.net/css?family=${fontName}&display=fallback`;
            link.rel = 'stylesheet';
            link.setAttribute('loading', 'lazy');

            const existingLink = document.querySelector(
                `link[href="${link.href}"]`,
            );

            if (!existingLink) {
                document.head.appendChild(link);
                linkRef.current = link;
            } else {
                linkRef.current = null;
            }
        }

        return () => {
            if (linkRef.current && document.head.contains(linkRef.current)) {
                document.head.removeChild(linkRef.current);
                linkRef.current = null;
            }
        };
    }, [font]);

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={classnames(
                'relative text-slate-900 border-2 border-transparent',
                {
                    '!border-2 !border-dotted !border-slate-500': isHovered,
                },
            )}
        >
            <p
                style={{
                    fontFamily: font ? getFontIdFromUrl(font!) : undefined,
                    fontWeight: weight,
                    fontSize: `${size?.value}${size?.unit}`,
                    lineHeight: `${height?.value}${height?.unit}`,
                    color: color,
                    textAlign: alignment,
                    fontStyle: style,
                    textDecoration: decoration,
                }}
            >
                {text}
            </p>
            {isHovered && <ElementActions label={label} id={id} />}
        </div>
    );
};

export const TextSettings = () => {
    const {
        actions: { setProp },
        text,
    } = useNode((node) => ({
        text: node.data.props.text,
    }));

    return (
        <TextInput
            label={'Text'}
            multiline
            value={text}
            onChange={(value: any) => {
                setProp((props: any) => (props.text = value), 500);
            }}
        />
    );
};

export const TextStyle = () => {
    const {
        actions: { setProp },
        font,
        weight,
        size,
        height,
        color,
        alignment,
        style,
        decoration,
    } = useNode((node) => ({
        font: node.data.props.font,
        weight: node.data.props.weight,
        size: node.data.props.size,
        height: node.data.props.height,
        color: node.data.props.color,
        alignment: node.data.props.alignment,
        style: node.data.props.style,
        decoration: node.data.props.decoration,
    }));

    const [fonts, setFonts] = useState<[string, FontData][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [localSize, setLocalSize] = useState(size);
    const [localHeight, setLocalHeight] = useState(height);

    useEffect(() => {
        setProp((props: any) => (props.size = localSize), 500);
    }, [localSize]);

    useEffect(() => {
        setProp((props: any) => (props.height = localHeight), 500);
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
        (item: any) => font && item[0] === getFontIdFromUrl(font),
    );

    const weightOptions: any[] | undefined = currentFont?.[1].weights?.map(
        (weight: number) => ({
            label: weight,
            value: weight,
        }),
    );

    return (
        <div
            className={
                'flex flex-col w-full items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
                <Accordion.Item title={'Typography'}>
                    <div className={'grid grid-cols-12 gap-1'}>
                        <div className={'col-span-12'}>
                            <FontInput
                                value={font}
                                onChange={(value: string) => {
                                    setProp((props: any) => {
                                        props.font = value;
                                        props.weight = undefined;
                                    }, 500);
                                }}
                                fonts={fonts}
                                loading={loading}
                                error={error}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <SelectInput
                                label={'Weight'}
                                value={weight}
                                options={weightOptions}
                                onChange={(value: any) => {
                                    setProp(
                                        (props: any) => (props.weight = value),
                                        500,
                                    );
                                }}
                            />
                        </div>
                        <div className={'col-span-6'}>
                            <TextInput
                                type={'number'}
                                label={'Size'}
                                rightContent={
                                    <SizeUnitInput
                                        value={size.unit}
                                        onChange={(value: string) => {
                                            setLocalSize((prev: any) => ({
                                                ...prev,
                                                unit: value,
                                            }));
                                        }}
                                    />
                                }
                                value={size.value}
                                onChange={(value: any) => {
                                    setLocalSize((prev: any) => ({
                                        ...prev,
                                        value,
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
                                        value={height.unit}
                                        onChange={(value: string) => {
                                            setLocalHeight((prev: any) => ({
                                                ...prev,
                                                unit: value,
                                            }));
                                        }}
                                    />
                                }
                                value={height.value}
                                onChange={(value: any) => {
                                    setLocalHeight((prev: any) => ({
                                        ...prev,
                                        value,
                                    }));
                                }}
                                classes={{ label: '!min-w-11 !w-11' }}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <ColorInput
                                label={'Color'}
                                value={color}
                                onChange={(value: any) => {
                                    setProp(
                                        (props: any) => (props.color = value),
                                        500,
                                    );
                                }}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <AlignButtonGroupInput
                                label={'Align'}
                                value={alignment}
                                onChange={(value: any) => {
                                    setProp(
                                        (props: any) =>
                                            (props.alignment = value),
                                        500,
                                    );
                                }}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <ItalicizeButtonGroupInput
                                label={'Italicize'}
                                value={style}
                                onChange={(value: any) => {
                                    setProp(
                                        (props: any) => (props.style = value),
                                        500,
                                    );
                                }}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <DecorationButtonGroupInput
                                label={'Decoration'}
                                value={decoration}
                                onChange={(value: any) => {
                                    setProp(
                                        (props: any) =>
                                            (props.decoration = value),
                                        500,
                                    );
                                }}
                            />
                        </div>
                    </div>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export const TextDefaultProps = {
    text: 'Hi',
};

Text.craft = {
    props: TextDefaultProps,
    related: {
        settings: TextSettings,
        style: TextStyle,
    },
};
