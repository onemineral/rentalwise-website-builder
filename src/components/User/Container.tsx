import React from 'react';
import { Node, useEditor, useNode } from '@craftjs/core';
import classnames from 'classnames';
import Accordion from '@/components/Accordion/Accordion';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';
import LayoutForm from '@/components/Forms/LayoutForm/LayoutForm';
import SizeForm from '@/components/Forms/SizeForm/SizeForm';
import PositionForm from '@/components/Forms/PositionForm/PositionForm';
import BackgroundForm from '@/components/Forms/BackgroundForm/BackgroundForm';
import BorderForm from '@/components/Forms/BorderForm/BorderForm';

export const Container = ({
    margin,
    padding,
    children,
    layout,
    size,
    position,
    background,
    border,
}: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { enabled } = useEditor((state: any) => {
        return { enabled: state.options.enabled };
    });

    const className = classnames(
        { 'border border-dashed border-slate-200': enabled },
        { block: layout?.display === 'block' },
        layout?.display === 'flex'
            ? {
                  flex: layout?.display === 'flex',
                  'flex-wrap': layout?.flexOptions?.direction === 'wrap',
              }
            : undefined,
        layout?.display === 'flex' &&
            layout?.flexOptions?.direction === 'horizontal'
            ? {
                  'flex-row': layout?.flexOptions?.direction === 'horizontal',
                  'justify-start': layout?.flexOptions?.horizontal === 'left',
                  'justify-end': layout?.flexOptions?.horizontal === 'right',
                  'justify-center':
                      layout?.flexOptions?.horizontal === 'center',
                  'justify-between':
                      layout?.flexOptions?.horizontal === 'space-between',
                  'justify-around':
                      layout?.flexOptions?.horizontal === 'space-around',

                  'items-start': layout?.flexOptions?.vertical === 'top',
                  'items-end': layout?.flexOptions?.vertical === 'bottom',
                  'items-center': layout?.flexOptions?.vertical === 'center',
                  'items-stretch': layout?.flexOptions?.vertical === 'stretch',
                  'items-baseline':
                      layout?.flexOptions?.vertical === 'baseline',
              }
            : undefined,
        layout?.display === 'flex' &&
            layout?.flexOptions?.direction === 'vertical'
            ? {
                  'flex-col': layout?.flexOptions?.direction === 'vertical',
                  'items-start': layout?.flexOptions?.horizontal === 'left',
                  'items-end': layout?.flexOptions?.horizontal === 'right',
                  'items-center': layout?.flexOptions?.horizontal === 'center',
                  'items-stretch':
                      layout?.flexOptions?.horizontal === 'stretch',
                  'items-baseline':
                      layout?.flexOptions?.horizontal === 'baseline',

                  'justify-start': layout?.flexOptions?.vertical === 'top',
                  'justify-end': layout?.flexOptions?.vertical === 'bottom',
                  'justify-center': layout?.flexOptions?.vertical === 'center',
                  'justify-between':
                      layout?.flexOptions?.vertical === 'space-between',
                  'justify-around':
                      layout?.flexOptions?.vertical === 'space-around',
              }
            : undefined,

        layout?.display === 'grid'
            ? {
                  grid: layout?.display === 'grid',
              }
            : undefined,

        layout?.display === 'grid' && layout?.gridOptions
            ? {
                  'grid-cols-1': layout?.gridOptions.columns === '1',
                  'grid-cols-2': layout?.gridOptions.columns === '2',
                  'grid-cols-3': layout?.gridOptions.columns === '3',
                  'grid-cols-4': layout?.gridOptions.columns === '4',
                  'grid-cols-5': layout?.gridOptions.columns === '5',
                  'grid-cols-6': layout?.gridOptions.columns === '6',
                  'grid-cols-7': layout?.gridOptions.columns === '7',
                  'grid-cols-8': layout?.gridOptions.columns === '8',
                  'grid-cols-9': layout?.gridOptions.columns === '9',
                  'grid-cols-10': layout?.gridOptions.columns === '10',
                  'grid-cols-11': layout?.gridOptions.columns === '11',
                  'grid-cols-12': layout?.gridOptions.columns === '12',
              }
            : undefined,
    );
console.log(padding);
    return (
        <div
            style={{
                boxSizing: 'border-box',
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
                paddingLeft: `${padding?.left?.value}${padding?.left?.unit}`,
                paddingTop: `${padding?.top?.value}${padding?.top?.unit}`,
                paddingRight: `${padding?.right?.value}${padding?.right?.unit}`,
                paddingBottom: `${padding?.bottom?.value}${padding?.bottom?.unit}`,
                gap:
                    layout?.display === 'grid'
                        ? `${layout?.gridOptions?.gap || 0}px`
                        : undefined,
                width: size?.width?.value
                    ? `${size?.width?.value}${size?.width?.unit}`
                    : 'auto',
                height: size?.height?.value
                    ? `${size?.height?.value}${size?.height?.unit}`
                    : 'auto',
                overflow: size?.overflow,
                position: position?.position,
                left: position?.left?.value
                    ? `${position?.left?.value}${position?.left?.unit}`
                    : 'auto',
                right: position?.right?.value
                    ? `${position?.right?.value}${position?.right?.unit}`
                    : 'auto',
                top: position?.top?.value
                    ? `${position?.top?.value}${position?.top?.unit}`
                    : 'auto',
                bottom: position?.bottom?.value
                    ? `${position?.bottom?.value}${position?.bottom?.unit}`
                    : 'auto',
                backgroundColor: background?.color,
                borderTop: border?.top
                    ? `${border?.top?.width?.value}${border?.top?.width?.unit} ${border?.top?.style} ${border?.top?.color}`
                    : undefined,
                borderBottom: border?.bottom
                    ? `${border?.bottom?.width?.value}${border?.bottom?.width?.unit} ${border?.bottom?.style} ${border?.bottom?.color}`
                    : undefined,
                borderLeft: border?.left
                    ? `${border?.left?.width?.value}${border?.left?.width?.unit} ${border?.left?.style} ${border?.left?.color}`
                    : undefined,
                borderRight: border?.right
                    ? `${border?.right?.width?.value}${border?.right?.width?.unit} ${border?.right?.style} ${border?.right?.color}`
                    : undefined,
            }}
            ref={(ref: any) => {
                connect(drag(ref));
            }}
            className={className}
        >
            {children}
        </div>
    );
};

export const ContainerStyle = () => {
    const {
        actions: { setProp },
        margin,
        padding,
        layout,
        size,
        position,
        background,
        border,
    } = useNode((node: Node) => ({
        margin: node.data.props.margin,
        padding: node.data.props.padding,
        layout: node.data.props.layout,
        size: node.data.props.size,
        position: node.data.props.position,
        background: node.data.props.background,
        border: node.data.props.border,
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
                <Accordion.Item title={'Position'}>
                    <PositionForm
                        record={position}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.position = value;
                            });
                        }}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Background'}>
                    <BackgroundForm
                        record={background}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.background = value;
                            });
                        }}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Border'}>
                    <BorderForm
                        record={border}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.border = value;
                            });
                        }}
                    />
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export const ContainerDefaultProps = {
    padding: {
        top: {
            value: '30',
            unit: 'px',
        },
        bottom: {
            value: '30',
            unit: 'px',
        },
        left: {
            value: '30',
            unit: 'px',
        },
        right: {
            value: '30',
            unit: 'px',
        },
    },
    margin: {
        top: {
            value: 'auto',
        },
        bottom: {
            value: 'auto',
        },
        left: {
            value: 'auto',
        },
        right: {
            value: 'auto',
        },
    },
    layout: {
        display: 'block',
        flexOptions: {
            direction: 'vertical',
            horizontal: 'left',
            vertical: 'top',
        },
        gridOptions: {
            columns: '2',
            gap: '8',
        },
    },
    size: {
        width: {
            value: undefined,
            unit: 'auto',
        },
        height: {
            value: undefined,
            unit: 'auto',
        },
    },
    position: {
        position: 'relative',
    },
    background: {
        color: 'transparent',
    },
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        style: ContainerStyle,
    },
};
