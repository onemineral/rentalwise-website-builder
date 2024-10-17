'use client';

import React from 'react';
import { Editor } from '@craftjs/core';
import { Root } from '@/components/user/Root';
import { Button } from '@/components/user/Button';
import { Text } from '@/components/user/Text';
import { Users } from '@/components/user/Users';
import { Container } from '@/components/user/Container';
import { Loading } from '@/components/user/Loading';
import FrameWrapper from '@/components/FrameWrapper';

const PageView = ({ nodes }: any) => {
    return (
        <div className={'w-full h-80 p-4 border-t border-slate-200'}>
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
