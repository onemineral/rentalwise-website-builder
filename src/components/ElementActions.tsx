import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useEditor, useNode } from '@craftjs/core';
import { createPortal } from 'react-dom';
import { useFrame } from 'react-frame-component';

const ElementActions = () => {
    const { actions, query } = useEditor();

    const { isHovered, isSelected, label, id, dom } = useNode((node: any) => {
        return {
            isHovered: node.events.hovered,
            isSelected: node.events.selected,
            label: node.data.displayName,
            id: node.id,
            dom: node.dom,
        };
    });

    const [rect, setRect] = useState<any>(dom?.getBoundingClientRect() || {});

    const node: any = query.node(id);

    useLayoutEffect(() => {
        const test = node?.get().dom;

        if (
            JSON.stringify(rect) !==
            JSON.stringify(test?.getBoundingClientRect())
        ) {
            setRect(test?.getBoundingClientRect());
        }
    }, [node]);

    const currentRef: any = useRef<HTMLDivElement>();
    const { document } = useFrame();

    const getPos = useCallback(() => {
        const { top, left, bottom } = rect;

        return {
            top: `${top > 0 ? top : bottom}px`,
            left: `${left}px`,
        };
    }, [rect]);

    const renderPortalComponent = useCallback(() => {
        return (
            <div
                ref={currentRef}
                className="absolute flex items-center -mt-[24px]"
                style={{
                    left: getPos().left,
                    top: getPos().top,
                    zIndex: 9999,
                }}
            >
                {/*Actions*/}
                <div
                    className={
                        'flex items-center bg-slate-600 text-white text-xs p-1 px-2 space-x-2 focus-visible:outline-none'
                    }
                >
                    <div className={'text-xs'}>{label}</div>
                    <div
                        className={'cursor-pointer'}
                        onClick={() => {
                            actions.delete(id);
                        }}
                    >
                        <RiDeleteBinFill size={14} />
                    </div>
                </div>
            </div>
        );
    }, [getPos, id, label]);

    if (isHovered || isSelected) {
        return createPortal(
            renderPortalComponent(),
            document!.querySelector('.element-actions')!,
        );
    }

    return null;
};

export default ElementActions;
