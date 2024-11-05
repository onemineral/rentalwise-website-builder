import React from 'react';
import { useNode } from '@craftjs/core';

export const Root = ({ children }: any) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={'relative w-full h-full overflow-auto bg-white'}
        >
            {children}
        </div>
    );
};
