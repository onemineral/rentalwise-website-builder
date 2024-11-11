import React, { useCallback, useEffect, useRef } from 'react';
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

    const currentRef: any = useRef<HTMLDivElement>();

    const getPos = useCallback(() => {
        const { top, left, bottom } = dom
            ? dom.getBoundingClientRect()
            : { top: 0, left: 0, bottom: 0 };

        return {
            top: `${top > 0 ? top : bottom}px`,
            left: `${left}px`,
        };
    }, [dom]);

    const scroll = useCallback(() => {
        const { current: currentDOM } = currentRef;

        if (!currentDOM) return;

        const { top, left } = getPos();

        currentDOM.style.top = top;
        currentDOM.style.left = left;
    }, [dom, getPos]);

    useEffect(() => {
        document
            .querySelector('.craftjs-renderer')
            ?.addEventListener('scroll', scroll);

        return () => {
            document
                .querySelector('.craftjs-renderer')
                ?.removeEventListener('scroll', scroll);
        };
    }, [scroll]);

    return (
        <>
            {render}
            {label !== 'Root' && <ElementActions />}
        </>
    );
};

export default RenderNode;
