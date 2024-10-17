import React from 'react';
import { Node, useNode } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';

export const Container = ({ margin = 0, padding = 0, children }: any) => {
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
            style={{
                margin: `${margin}px`,
                padding: `${padding}px`,
            }}
            ref={(ref: any) => connect(drag(ref))}
            className={classnames(
                'relative flex flex-col border-2 border-gray-200 !p-4 bg-slate-100 space-y-2',
                {
                    'box-border border-2 border-dotted border-slate-500':
                        isHovered,
                },
            )}
        >
            {children}
            {isHovered && <ElementActions label={label} id={id} />}
        </div>
    );
};
