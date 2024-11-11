import React from 'react';
import { useEditor } from '@craftjs/core';
import { IoWarningOutline } from 'react-icons/io5';
import { TbReportSearch } from 'react-icons/tb';

const SettingsPanel = () => {
    const { selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings:
                    state.nodes[currentNodeId].related &&
                    state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
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
                {selected.settings ? (
                    React.createElement(selected.settings)
                ) : (
                    <div
                        className={
                            'flex flex-col w-full items-center py-10 space-y-2 text-slate-400'
                        }
                    >
                        <TbReportSearch size={32} />
                        <span className={'text-sm'}>There are no settings</span>
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

export default SettingsPanel;
