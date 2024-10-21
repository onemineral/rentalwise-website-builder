import React, { useContext } from 'react';
import { Node, useNode } from '@craftjs/core';
import { EditorContext } from '@/components/EditorWrapper';
import { useData } from '@/hooks/useData';
import classnames from 'classnames';
import ElementActions from '@/components/ElementActions';

export const Users = () => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const { isHovered, label, id } = useNode((node: Node) => ({
        isHovered: node.events.hovered,
        label: node.data.displayName,
        id: node.id,
    }));

    const context = useContext(EditorContext);
    const serverUsers = context.users;

    const [isLoading, data] = useData();

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
            <strong>Server loaded data:</strong> {JSON.stringify(serverUsers)}
            <br />
            {isLoading ? (
                <strong>Loadind...</strong>
            ) : (
                <div>
                    <strong>Client loaded data</strong>
                    {JSON.stringify(data)}
                </div>
            )}
            {isHovered && <ElementActions label={label} id={id} />}
        </div>
    );
};
