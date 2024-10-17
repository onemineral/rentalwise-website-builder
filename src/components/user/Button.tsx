import React from 'react';
import { Button as CatalystButton } from '@/components/catalyst-ui-kit/button';
import { Node, useNode } from '@craftjs/core';
import ElementActions from '@/components/ElementActions';
import classnames from 'classnames';

export const Button = ({ color, children }: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        label: node.data.displayName,
        id: node.id,
    }));

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={classnames('border-2 border-transparent', {
                'box-border border-2 border-dotted border-slate-500': isHovered,
            })}
        >
            <CatalystButton style={{ color }} className={'relative'}>
                {children}
                {isHovered && <ElementActions label={label} id={id} />}
            </CatalystButton>
        </div>
    );
};
