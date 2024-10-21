import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const ContextMenu = ({ children }: { children?: ReactNode }) => {
    return (
        <motion.div
            className={
                'bg-slate-100 absolute inset-0 !left-16 !top-11 border-l border-slate-300 overflow-x-hidden'
            }
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'fit-content', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{
                type: 'spring',
                duration: 0.4,
                bounce: 0,
            }}
        >
            {children}
        </motion.div>
    );
};

export default ContextMenu;
