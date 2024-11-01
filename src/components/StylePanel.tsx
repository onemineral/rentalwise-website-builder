import React from 'react';
import { useEditor } from '@craftjs/core';
import { TbReportSearch } from 'react-icons/tb';
import { IoWarningOutline } from 'react-icons/io5';

const StylePanel = () => {
    const { selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                style:
                    state.nodes[currentNodeId].related &&
                    state.nodes[currentNodeId].related.style,
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });

    if (selected && isEnabled) {
        return (
            <div
                className={
                    'flex flex-col w-full items-start bg-slate-50 h-full select-none pt-2'
                }
            >
                {selected.style ? (
                    React.createElement(selected.style)
                ) : (
                    <div
                        className={
                            'flex flex-col w-full items-center py-10 space-y-2 text-slate-400'
                        }
                    >
                        <TbReportSearch size={32} />
                        <span className={'text-sm'}>There are no styles</span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={
                'flex flex-col items-center py-10 space-y-2 text-slate-400'
            }
        >
            <IoWarningOutline size={32} />
            <span className={'text-sm'}>Please select a block</span>
        </div>
    );
};

export default StylePanel;
