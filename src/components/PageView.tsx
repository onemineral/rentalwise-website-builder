'use client';

import React from 'react';
import { Editor } from '@craftjs/core';
import { Root } from '@/components/User/Root';
import { Paragraph } from '@/components/User/Paragraph';
import { Container } from '@/components/User/Container';
import FrameWrapper from '@/components/FrameWrapper';
import { Heading } from '@/components/User/Heading';
import { Link } from '@/components/User/Link';
import { Button } from '@/components/User/Button';

const PageView = ({ nodes }: any) => {
    return (
        <div
            className={
                'w-full h-[calc(100vh-4rem)] p-4 border-t border-slate-200 overflow-auto'
            }
        >
            <Editor
                enabled={false}
                resolver={{
                    Root,
                    Button,
                    Paragraph,
                    Heading,
                    Link,
                    Container,
                }}
            >
                <FrameWrapper nodes={nodes} />
            </Editor>
        </div>
    );
};

export default PageView;
