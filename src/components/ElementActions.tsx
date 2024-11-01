import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useEditor } from '@craftjs/core';

const ElementActions = ({ id, label }: any) => {
    const { actions } = useEditor();

    return (
        <div
            className={
                'flex items-center bg-slate-600 text-white p-1.5 space-x-2 focus-visible:outline-none'
            }
        >
            <div className={'text-sm'}>{label}</div>
            <div
                className={'cursor-pointer'}
                onClick={() => actions.delete(id)}
            >
                <RiDeleteBinFill size={20} />
            </div>
        </div>
    );
};

export default ElementActions;
