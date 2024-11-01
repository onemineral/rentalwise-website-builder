'use client';

import React from 'react';
import { Editor } from '@craftjs/core';
import { Root } from '@/components/User/Root';
import { Button } from '@/components/User/Button';
import { Text } from '@/components/User/Text';
import { Users } from '@/components/User/Users';
import { Container } from '@/components/User/Container';
import { Loading } from '@/components/User/Loading';
import FrameWrapper from '@/components/FrameWrapper';

const PageView = ({ nodes }: any) => {
    return (
        <div
            className={
                'w-full h-[calc(100vh-4rem)] p-4 border-t border-slate-200 overflow-auto'
            }
        >
            <Editor
                enabled={false}
                resolver={{ Root, Button, Text, Users, Container, Loading }}
            >
                <FrameWrapper nodes={nodes} />
            </Editor>
        </div>
    );
};

export default PageView;
