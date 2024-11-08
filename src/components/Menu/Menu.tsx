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
    const [activeMenuItem, setActiveMenuItem] = useState<null | string>(null);

    useClickOutside(menuRef, () => {
        setContextMenu(null);
    });

    const onBlockDrag = useCallback(() => {
        setContextMenu(null);
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
                        'flex flex-col w-full items-center flex-grow overflow-y-auto'
                    }
                >
                    <MenuItem
                        name={'blocks'}
                        icon={<FiPlus size={24} />}
                        onClick={() => {
                            setActiveMenuItem('blocks');

                            if (contextMenu) {
                                setContextMenu(null);
                            } else {
                                setContextMenu(() => {
                                    return <Blocks onDragEnd={onBlockDrag} />;
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
                        'w-full flex flex-col items-center border-t border-slate-300 '
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
                <AnimatePresence initial={false}>
                    {contextMenu && <ContextMenu>{contextMenu}</ContextMenu>}
                </AnimatePresence>
            </div>
        </MenuContext.Provider>
    );
};

export default Menu;
