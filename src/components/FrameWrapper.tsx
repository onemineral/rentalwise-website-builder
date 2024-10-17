'use client';

import { Frame, useEditor } from '@craftjs/core';
import React, { useEffect } from 'react';

const FrameWrapper = ({ nodes, children }: any) => {
    const { actions } = useEditor();

    useEffect(() => {
        if (nodes) {
            actions.deserialize(nodes);
        }
    }, [nodes]);

    return <Frame data={nodes}>{children}</Frame>;
};

export default FrameWrapper;
