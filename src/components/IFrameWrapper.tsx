import React, { ReactNode } from 'react';
import { useFrame } from 'react-frame-component';

const IFrameWrapper = ({ children }: { children?: ReactNode }) => {
    const { document: doc } = useFrame();

    document.head.querySelectorAll('link').forEach((style) => {
        const frameStyles = style.cloneNode(true);
        doc?.head?.append(frameStyles);
    });

    return (
        <>
            {children}
            <div className={'element-actions flex flex-1 h-full flex-col'} />
        </>
    );
};

export default IFrameWrapper;
