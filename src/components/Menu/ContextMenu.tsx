import { motion } from 'framer-motion';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

const ContextMenu = forwardRef(
    ({ children }: { children?: ReactNode }, ref: ForwardedRef<any>) => {
        return (
            <motion.div
                ref={ref}
                className={
                    'bg-slate-50 absolute !bottom-0 !left-16 !top-14 border-x border-slate-300 overflow-x-hidden z-10'
                }
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                exit={{ x: -200 }}
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
