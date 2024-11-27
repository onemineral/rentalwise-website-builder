import React, { useEffect, useRef } from 'react';
import { useNode, Node, useEditor } from '@craftjs/core';
import classnames from 'classnames';
import TextInput from '@/components/Forms/Inputs/TextInput';
import Accordion from '@/components/Accordion/Accordion';
import { getFontIdFromUrl } from '@/components/FontShowcase/FontShowcase';
import TypographyForm from '@/components/Forms/TypographyForm/TypographyForm';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import { useEditorStore } from '@/hooks/useEditorStore';
import { translate } from '@/lib/utils';

export const Link = ({
    text,
    url,
    target,
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
        connectors: { connect },
    } = useNode();

    const { enabled } = useEditor((state: any) => {
        return { enabled: state.options.enabled };
    });

    const linkRef = useRef<HTMLLinkElement | null>(null);

    const currentLanguage = useEditorStore(
        (state: any) => state.currentLanguage,
    );

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
        <a
            ref={(ref: any) => {
                connect(ref);
            }}
            href={url}
            target={target}
            className={classnames(
                'relative underline text-blue-800 cursor-pointer',
                {
                    'border border-dashed border-slate-200': enabled,
                },
            )}
            onClick={(e: any) => {
                if (enabled) {
                    e.preventDefault();
                }
            }}
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
            {translate(text, currentLanguage?.code)}
        </a>
    );
};

export const LinkSettings = () => {
    const {
        actions: { setProp },
        text,
        url,
        target,
    } = useNode((node) => ({
        text: node.data.props.text,
        url: node.data.props.url,
        target: node.data.props.target,
    }));
    const currentLanguage = useEditorStore(
        (state: any) => state.currentLanguage,
    );

    return (
        <div className={'grid grid-cols-12 gap-1 w-full'}>
            <div className={'col-span-12'}>
                <TextInput
                    label={'Text'}
                    multiline
                    value={translate(text, currentLanguage?.code)}
                    onChange={(value: any) => {
                        setProp(
                            (props: any) =>
                                (props.text[currentLanguage?.code || 'en'] =
                                    value),
                            500,
                        );
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <TextInput
                    label={'Url'}
                    value={url}
                    onChange={(value: any) => {
                        setProp((props: any) => (props.url = value), 500);
                    }}
                />
            </div>
            <div className={'col-span-12'}>
                <SelectInput
                    label={'Target'}
                    options={[
                        {
                            label: 'Blank',
                            value: '_blank',
                        },
                        {
                            label: 'Self',
                            value: '_self',
                        },
                    ]}
                    value={target}
                    onChange={(value: any) => {
                        setProp((props: any) => (props.target = value), 500);
                    }}
                />
            </div>
        </div>
    );
};

export const LinkStyle = () => {
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
    } = useNode((node: Node) => ({
        font: node.data.props.font,
        weight: node.data.props.weight,
        size: node.data.props.size,
        height: node.data.props.height,
        color: node.data.props.color,
        alignment: node.data.props.alignment,
        style: node.data.props.style,
        decoration: node.data.props.decoration,
    }));

    return (
        <div
            className={
                'flex flex-col w-full items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
                <Accordion.Item title={'Typography'}>
                    <TypographyForm
                        record={{
                            font,
                            weight,
                            size,
                            height,
                            color,
                            alignment,
                            style,
                            decoration,
                        }}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                Object.keys(value).forEach((key) => {
                                    props[key] = value[key];
                                });

                                return props;
                            }, 500);
                        }}
                    />
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export const LinkDefaultProps = {
    text: {
        en: 'Lorem ipsum',
    },
    target: '_blank',
};

Link.craft = {
    props: LinkDefaultProps,
    related: {
        settings: LinkSettings,
        style: LinkStyle,
    },
};
