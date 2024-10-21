import React from 'react';
import { CgDisplayFlex } from 'react-icons/cg';

const BlockCard = () => {
    return (
        <div className={'w-auto'}>
            <div
                className={
                    'flex flex-col items-center justify-center w-auto space-y-2 border border-slate-200 rounded-md px-8 py-3 cursor-pointer hover:bg-slate-200'
                }
            >
                <CgDisplayFlex size={24}/>
                <span className={'text-xs'}>Flex</span>
            </div>
        </div>
    );
};

export default BlockCard;
