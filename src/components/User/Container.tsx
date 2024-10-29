import React from 'react';
import { Node, useNode } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';
import Accordion from '@/components/Accordion/Accordion';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';
import LayoutForm from '@/components/Forms/LayoutForm/LayoutForm';
import SizeForm from '@/components/Forms/SizeForm/SizeForm';

export const Container = ({ margin, padding, children, layout, size }: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, isSelected, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        isSelected: node.events.selected,
        label: node.data.displayName,
        id: node.id,
    }));

    const className = classnames(
        'relative border-2 border-gray-200 bg-slate-100 h-96',
        {
            '!border-2 !border-dotted !border-slate-500':
                isHovered || isSelected,
        },
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

                  'grid-rows-1': layout?.gridOptions.rows === '1',
                  'grid-rows-2': layout?.gridOptions.rows === '2',
                  'grid-rows-3': layout?.gridOptions.rows === '3',
                  'grid-rows-4': layout?.gridOptions.rows === '4',
                  'grid-rows-5': layout?.gridOptions.rows === '5',
                  'grid-rows-6': layout?.gridOptions.rows === '6',
                  'grid-rows-7': layout?.gridOptions.rows === '7',
                  'grid-rows-8': layout?.gridOptions.rows === '8',
                  'grid-rows-9': layout?.gridOptions.rows === '9',
                  'grid-rows-10': layout?.gridOptions.rows === '10',
                  'grid-rows-11': layout?.gridOptions.rows === '11',
                  'grid-rows-12': layout?.gridOptions.rows === '12',
              }
            : undefined,
    );

    return (
        <div
            style={{
                marginLeft:
                    margin?.left === 'auto' ? 'auto' : `${margin?.left}px`,
                marginTop: margin?.top === 'auto' ? 'auto' : `${margin?.top}px`,
                marginRight:
                    margin?.right === 'auto' ? 'auto' : `${margin?.right}px`,
                marginBottom:
                    margin?.bottom === 'auto' ? 'auto' : `${margin?.bottom}px`,
                paddingLeft: `${padding?.left}px`,
                paddingTop: `${padding?.top}px`,
                paddingRight: `${padding?.right}px`,
                paddingBottom: `${padding?.bottom}px`,
            }}
            ref={(ref: any) => connect(drag(ref))}
            className={className}
        >
            {children}
            {(isHovered || isSelected) && (
                <ElementActions label={label} id={id} />
            )}
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
    } = useNode((node: Node) => ({
        margin: node.data.props.margin,
        padding: node.data.props.padding,
        layout: node.data.props.layout,
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
                        record={{
                            size,
                        }}
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

export const ContainerDefaultProps = {
    padding: {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30,
    },
    margin: {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
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
            rows: '2',
        },
    },
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        style: ContainerStyle,
    },
};
