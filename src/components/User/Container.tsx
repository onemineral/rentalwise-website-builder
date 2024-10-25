import React from 'react';
import { Node, useNode } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';
import Accordion from '@/components/Accordion/Accordion';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';

export const Container = ({ margin, padding, children }: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, isSelected, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        isSelected: node.events.selected,
        label: node.data.displayName,
        id: node.id,
    }));

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
            className={classnames(
                'relative flex flex-col border-2 border-gray-200 bg-slate-100',
                {
                    '!border-2 !border-dotted !border-slate-500':
                        isHovered || isSelected,
                },
            )}
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
    } = useNode((node: Node) => ({
        margin: node.data.props.margin,
        padding: node.data.props.padding,
    }));

    return (
        <div
            className={
                'flex flex-col w-full items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
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
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        style: ContainerStyle,
    },
};
