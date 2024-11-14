import React, { useEffect, useRef } from 'react';
import { useNode, Node, useEditor } from '@craftjs/core';
import classnames from 'classnames';
import TextInput from '@/components/Forms/Inputs/TextInput';
import Accordion from '@/components/Accordion/Accordion';
import { getFontIdFromUrl } from '@/components/FontShowcase/FontShowcase';
import TypographyForm from '@/components/Forms/TypographyForm/TypographyForm';

export const Paragraph = ({
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

    const { enabled } = useEditor((state: any) => {
        return { enabled: state.options.enabled };
    });

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
        <p
            ref={(ref: any) => {
                connect(drag(ref));
            }}
            className={classnames('relative text-slate-900', {
                'border border-dashed border-slate-200': enabled,
            })}
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
    );
};

export const ParagraphSettings = () => {
    const {
        actions: { setProp },
        text,
    } = useNode((node) => ({
        text: node.data.props.text,
    }));

    return (
        <div className={'grid grid-cols-12 gap-1 w-full'}>
            <div className={'col-span-12'}>
                <TextInput
                    label={'Text'}
                    multiline
                    value={text}
                    onChange={(value: any) => {
                        setProp((props: any) => (props.text = value), 500);
                    }}
                />
            </div>
        </div>
    );
};

export const ParagraphStyle = () => {
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

export const ParagraphDefaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
};

Paragraph.craft = {
    props: ParagraphDefaultProps,
    related: {
        settings: ParagraphSettings,
        style: ParagraphStyle,
    },
};
