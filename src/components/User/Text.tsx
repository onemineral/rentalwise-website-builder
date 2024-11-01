import React, { useEffect, useRef, useState } from 'react';
import { useNode, Node } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';
import TextInput from '@/components/Forms/Inputs/TextInput';
import Accordion from '@/components/Accordion/Accordion';
import { getFontIdFromUrl } from '@/components/FontShowcase/FontShowcase';
import TypographyForm from '@/components/Forms/TypographyForm/TypographyForm';
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from '@floating-ui/react';

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

    const { isHovered, isSelected, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        isSelected: node.events.selected,
        label: node.data.displayName,
        id: node.id,
    }));

    const { refs, floatingStyles, context } = useFloating({
        placement: 'top-start',
        open: isHovered || isSelected,
        whileElementsMounted: autoUpdate,
        middleware: [flip()],
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([click, dismiss, role]);

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
            ref={(ref: any) => {
                refs.setReference(ref);
                connect(drag(ref));
            }}
            className={classnames(
                'relative text-slate-900 border-2 border-transparent',
                {
                    '!border-2 !border-dotted !border-slate-500':
                        isHovered || isSelected,
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
            {(isHovered || isSelected) && (
                <FloatingFocusManager context={context} modal={false}>
                    <div
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                            top: 0,
                            left: 0,
                        }}
                        {...getFloatingProps()}
                        className={'focus-visible:outline-none'}
                    >
                        <ElementActions label={label} id={id} />
                    </div>
                </FloatingFocusManager>
            )}
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
