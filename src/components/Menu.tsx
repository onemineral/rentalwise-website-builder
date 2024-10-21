import React, { useState } from 'react';
import { FiLayers, FiPlus } from 'react-icons/fi';
import {
    IoDocumentOutline,
    IoImagesOutline,
    IoSettingsOutline,
} from 'react-icons/io5';
import ContextMenu from '@/components/ContextMenu';
import { AnimatePresence } from 'framer-motion';
import BlockCard from '@/components/BlockCard';

const Menu = () => {
    const [contextMenuVisible, setContextMenuVisible] = useState(false);

    return (
        <>
            <div
                className={'h-full bg-slate-100 flex flex-col items-center'}
                style={{ width: '78px' }}
            >
                <div
                    className={
                        'flex flex-col w-full items-center flex-grow overflow-y-auto'
                    }
                >
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-3'
                        }
                        onClick={() =>
                            setContextMenuVisible(!contextMenuVisible)
                        }
                    >
                        <FiPlus size={24} />
                    </div>
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-3'
                        }
                    >
                        <FiLayers size={20} />
                    </div>
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-3'
                        }
                    >
                        <IoDocumentOutline size={22} />
                    </div>
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-3'
                        }
                    >
                        <IoImagesOutline size={22} />
                    </div>
                </div>
                <div
                    className={
                        'w-full flex flex-col items-center border-t border-slate-300 '
                    }
                >
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-2'
                        }
                    >
                        <IoSettingsOutline size={24} />
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {contextMenuVisible && (
                    <ContextMenu>
                        <div className={'grid grid-cols-2 gap-2 p-2'}>
                            <BlockCard />
                            <BlockCard />
                            <BlockCard />
                            <BlockCard />
                            <BlockCard />
                        </div>
                    </ContextMenu>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
