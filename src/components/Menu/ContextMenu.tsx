import { motion } from 'framer-motion';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

const ContextMenu = forwardRef(
    ({ children }: { children?: ReactNode }, ref: ForwardedRef<any>) => {
        return (
            <motion.div
                ref={ref}
                className={
                    'bg-slate-50 absolute inset-0 !left-16 !top-14 border-x border-slate-300 overflow-x-hidden'
                }
                style={{ zIndex: 99991 }}
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
    },
);

export default ContextMenu;
