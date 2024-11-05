import React from 'react';
import { Node, useEditor, useNode } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';
import Accordion from '@/components/Accordion/Accordion';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';
import LayoutForm from '@/components/Forms/LayoutForm/LayoutForm';
import SizeForm from '@/components/Forms/SizeForm/SizeForm';
import PositionForm from '@/components/Forms/PositionForm/PositionForm';
import BackgroundForm from '@/components/Forms/BackgroundForm/BackgroundForm';
import BorderForm from '@/components/Forms/BorderForm/BorderForm';
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
    const { isHovered, isSelected, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        isSelected: node.events.selected,
        label: node.data.displayName,
        id: node.id,
    }));

    const className = classnames(
        { 'border border-dashed border-slate-400': enabled },
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

    return (
        <div
            style={{
                boxSizing: 'border-box',
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
                refs.setReference(ref);
                connect(drag(ref));
            }}
            className={className}
        >
            {children}
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
        position: 'static',
    },
    background: {
        color: 'transparent',
    },
    // border: {
    //     top: {
    //         size: {
    //             value: '1',
    //             unit: 'px',
    //         },
    //         style: 'solid',
    //         color: 'red',
    //     },
    //     bottom: {
    //         size: {
    //             value: '1',
    //             unit: 'px',
    //         },
    //         style: 'solid',
    //         color: 'red',
    //     },
    //     left: {
    //         size: {
    //             value: '1',
    //             unit: 'px',
    //         },
    //         style: 'solid',
    //         color: 'red',
    //     },
    //     right: {
    //         size: {
    //             value: '1',
    //             unit: 'px',
    //         },
    //         style: 'solid',
    //         color: 'red',
    //     },
    // },
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        style: ContainerStyle,
    },
};
