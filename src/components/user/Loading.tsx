import React, { useEffect, useState } from 'react';
import { Node, useNode } from '@craftjs/core';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';

export const Loading = () => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        label: node.data.displayName,
        id: node.id,
    }));

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={classnames(
                'relative text-slate-900 border-2 border-transparent',
                {
                    'box-border border-2 border-dotted border-slate-500':
                        isHovered,
                },
            )}
        >
            {loading ? <strong>Loading...</strong> : <strong>Done</strong>}
            {isHovered && <ElementActions label={label} id={id} />}
        </div>
    );
};
