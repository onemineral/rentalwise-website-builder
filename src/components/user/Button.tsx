import React from 'react';
import { Node, useNode } from '@craftjs/core';
import ElementActions from '@/components/ElementActions';
import classnames from 'classnames';
import BaseButton from '@/components/BaseButton';

export const Button = ({ children }: any) => {
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
                '!border-2 !border-dotted !border-slate-500': isHovered,
            })}
        >
            <BaseButton>
                {children}
                {isHovered && <ElementActions label={label} id={id} />}
            </BaseButton>
        </div>
    );
};
