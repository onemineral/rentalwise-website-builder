import React, { useEffect } from 'react';
import { useNode } from '@craftjs/core';
import ElementActions from '@/components/ElementActions';

const RenderNode = ({ render }: any) => {
    const { isActive, isHover, label, dom } = useNode((node) => ({
        id: node.id,
        label: node.data.displayName,
        isActive: node.events.selected,
        isHover: node.events.hovered,
        dom: node.dom,
    }));

    useEffect(() => {
        if (dom && label !== 'Root') {
            if (isActive || isHover) dom.classList.add('component-selected');
            else dom.classList.remove('component-selected');
        }
    }, [dom, isActive, isHover, label]);

    return (
        <>
            {render}
            {label !== 'Root' && <ElementActions />}
        </>
    );
};

export default RenderNode;
