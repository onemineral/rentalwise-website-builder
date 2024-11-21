import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { FiLayers, FiPlus } from 'react-icons/fi';
import {
    IoDocumentOutline,
    IoImagesOutline,
    IoSettingsOutline,
    IoTextOutline,
} from 'react-icons/io5';
import ContextMenu from '@/components/Menu/ContextMenu';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from '@/hooks/useClickOutside';
import { createContext } from 'react';
import MenuItem from '@/components/Menu/MenuItem';
import Blocks from '@/components/Menu/Blocks/Blocks';

export const MenuContext = createContext({
    activeMenuItem: null,
} as any);

const Menu = () => {
    const menuRef: any = useRef(null);
    const [contextMenu, setContextMenu] = useState<ReactNode>(null);
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState<null | string>(null);

    useClickOutside(menuRef, () => {
        setContextMenuVisible(false);
    });

    const onBlockDrag = useCallback(() => {
        setContextMenuVisible(false);
    }, []);

    return (
        <MenuContext.Provider value={{ activeMenuItem }}>
            <div
                className={
                    'h-full bg-slate-50 flex flex-col items-center border-r border-slate-300'
                }
                style={{ width: '78px' }}
                ref={menuRef}
            >
                <div
                    className={
                        'flex flex-col w-full bg-slate-50 items-center flex-grow overflow-y-auto z-20'
                    }
                >
                    <MenuItem
                        name={'blocks'}
                        icon={<FiPlus size={24} />}
                        onClick={() => {
                            setActiveMenuItem('blocks');

                            if (contextMenu && contextMenuVisible) {
                                setContextMenuVisible(false);
                            } else {
                                setContextMenuVisible(true);
                                setContextMenu(() => {
                                    return <Blocks onDragStart={onBlockDrag} />;
                                });
                            }
                        }}
                    />

                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-4'
                        }
                    >
                        <FiLayers size={20} />
                    </div>
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-4'
                        }
                    >
                        <IoDocumentOutline size={22} />
                    </div>
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-4'
                        }
                    >
                        <IoImagesOutline size={22} />
                    </div>
                </div>
                <div
                    className={
                        'w-full flex flex-col items-center border-t border-slate-300 bg-slate-50 z-20'
                    }
                >
                    <div
                        className={
                            'flex w-full hover:bg-slate-200 cursor-pointer justify-center py-4'
                        }
                    >
                        <IoSettingsOutline size={24} />
                    </div>
                </div>
                <ContextMenu show={contextMenuVisible}>
                    {contextMenu}
                </ContextMenu>
            </div>
        </MenuContext.Provider>
    );
};

export default Menu;
