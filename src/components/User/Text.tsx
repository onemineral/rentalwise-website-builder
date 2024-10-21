import React from 'react';
import { useNode, Node } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';

export const Text = ({ text, fontSize }: any) => {
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
            className={classnames(
                'relative text-slate-900 border-2 border-transparent',
                {
                    '!border-2 !border-dotted !border-slate-500': isHovered,
                },
            )}
        >
            <p style={{ fontSize }}>{text}</p>
            {isHovered && <ElementActions label={label} id={id} />}
        </div>
    );
};
