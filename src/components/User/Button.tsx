import React from 'react';
import { useNode } from '@craftjs/core';
import BaseButton from '@/components/BaseButton';
import Accordion from '@/components/Accordion/Accordion';
import LayoutForm from '@/components/Forms/LayoutForm/LayoutForm';
import TextInput from '@/components/Forms/Inputs/TextInput';
import SelectInput from '@/components/Forms/Inputs/SelectInput';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';
import SizeForm from '@/components/Forms/SizeForm/SizeForm';

export const Button = ({ text, layout, margin, padding, size }: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <span
            ref={(ref: any) => connect(drag(ref))}
            className={'relative'}
            style={{
                ...layout,
                marginLeft:
                    margin?.left?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.left?.value}${margin?.left?.unit}`,
                marginTop:
                    margin?.top?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.top?.value}${margin?.top?.unit}`,
                marginRight:
                    margin?.right?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.right?.value}${margin?.right?.unit}`,
                marginBottom:
                    margin?.bottom?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.bottom?.value}${margin?.bottom?.unit}`,
            }}
        >
            <BaseButton
                style={{
                    width: size?.width?.value
                        ? `${size?.width?.value}${size?.width?.unit}`
                        : 'auto',
                    height: size?.height?.value
                        ? `${size?.height?.value}${size?.height?.unit}`
                        : 'auto',
                    paddingLeft: `${padding?.left}px`,
                    paddingTop: `${padding?.top}px`,
                    paddingRight: `${padding?.right}px`,
                    paddingBottom: `${padding?.bottom}px`,
                }}
            >
                {text}
            </BaseButton>
        </span>
    );
};

export const ButtonSettings = () => {
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

export const ButtonStyle = () => {
    const {
        actions: { setProp },
        layout,
        margin,
        padding,
        size,
    } = useNode((node) => ({
        layout: node.data.props.layout,
        margin: node.data.props.margin,
        padding: node.data.props.padding,
        size: node.data.props.size,
    }));

    return (
        <div
            className={
                'flex flex-col w-full items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
                <Accordion.Item title={'Layout'}>
                    <LayoutForm
                        record={layout}
                        onChange={(value: any) => {
                            setProp((props: any) => (props.layout = value));
                        }}
                        exclude={['flex', 'grid']}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Spacing'}>
                    <SpacingForm
                        record={{ margin, padding }}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.margin = value.margin;
                                props.padding = value.padding;
                            });
                        }}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Size'}>
                    <SizeForm
                        record={size}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.size = value;
                            });
                        }}
                    />
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export const ButtonDefaultProps = {
    text: 'Button',
};

Button.craft = {
    props: ButtonDefaultProps,
    related: {
        settings: ButtonSettings,
        style: ButtonStyle,
    },
};
