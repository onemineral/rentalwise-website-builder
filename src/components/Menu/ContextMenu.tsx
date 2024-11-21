import { motion } from 'framer-motion';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

const ContextMenu = forwardRef(
    (
        { show, children }: { show?: boolean; children?: ReactNode },
        ref: ForwardedRef<any>,
    ) => {
        return (
            <motion.div
                ref={ref}
                className={
                    'bg-slate-50 absolute !bottom-0 !left-16 !top-14 border-x border-slate-300 overflow-x-hidden z-10'
                }
                initial={{ x: -206 }}
                animate={{ x: show ? 0 : -206 }}
                exit={{ x: show ? -206 : 0 }}
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
