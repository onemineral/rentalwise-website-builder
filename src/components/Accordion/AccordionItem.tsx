import React, { ReactNode, useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const AccordionItem = ({
    title,
    children,
}: {
    title: ReactNode;
    children?: ReactNode;
}) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={'flex flex-col text-sm overflow-hidden'}>
            <div
                className={
                    'p-2 mx-1 text-xs flex justify-between items-center border-b border-slate-300'
                }
                onClick={() => {
                    setOpen((old) => !old);
                }}
            >
                {title}
                {open ? <FaCaretDown /> : <FaCaretRight />}
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{
                            type: 'spring',
                            duration: 0.4,
                            bounce: 0,
                        }}
                    >
                        <div className={'p-2'}>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
