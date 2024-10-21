'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Root } from '@/components/User/Root';
import { Button } from '@/components/User/Button';
import { Text } from '@/components/User/Text';
import { Container } from '@/components/User/Container';
import { Editor, Element } from '@craftjs/core';
import Topbar from '@/components/Topbar';
import Toolbox from '@/components/Toolbox';
import SettingsPanel from '@/components/SettingsPanel';
import PageView from '@/components/PageView';
import FrameWrapper from '@/components/FrameWrapper';
import Layers from '@/components/Layers';
import Tabs, { TabProps } from '@/components/Tabs/Tabs';
import { FiLayers, FiPlus } from 'react-icons/fi';
import {
    IoDocumentOutline,
    IoImagesOutline,
    IoSettingsOutline,
} from 'react-icons/io5';
import ContextMenu from '@/components/ContextMenu';
import Menu from '@/components/Menu';

export const EditorContext = createContext({ users: null, query: null });

const EditorWrapper = ({ data }: any) => {
    const [localNodes, setLocalNodes] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window) {
            const item = window.localStorage.getItem(
                'rentalwise-website-builder',
            );

            if (item) {
                setLocalNodes(
                    window.localStorage.getItem('rentalwise-website-builder'),
                );
            }
        }
    }, []);

    const onNodesChange = useCallback((value: any) => {
        setLocalNodes(value.serialize());
    }, []);

    const onSave = useCallback(async () => {
        setLoading(true);

        if (window) {
            window.localStorage.setItem(
                'rentalwise-website-builder',
                localNodes || '',
            );
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [localNodes]);

    const tabs: TabProps[] = [
        {
            id: 'style',
            label: 'Style',
            content: 'Content 1',
        },
        {
            id: 'settings',
            label: 'Settings',
            content: 'Content 2',
        },
    ];

    return (
        <EditorContext.Provider value={data}>
            <Editor
                resolver={{ Root, Button, Text, Container }}
                onNodesChange={onNodesChange}
            >
                <div
                    className={
                        'w-screen h-dvh flex flex-col bg-white text-slate-900'
                    }
                >
                    <Topbar onSave={onSave} loading={loading} />
                    <div className={'flex w-full h-full'}>
                        <Menu />
                        <div className={'flex flex-grow w-full'}>
                            <FrameWrapper nodes={localNodes}>
                                <Element
                                    is={Root}
                                    canvas
                                    custom={{ displayName: 'Root' }}
                                ></Element>
                            </FrameWrapper>
                        </div>
                        <div className={'flex flex-col w-72'}>
                            <Tabs tabs={tabs} />
                            {/*<Toolbox />*/}
                            <SettingsPanel />
                            {/*<Layers />*/}
                        </div>
                    </div>
                    {/*<PageView nodes={localNodes} />*/}
                </div>
            </Editor>
        </EditorContext.Provider>
    );
};

export default EditorWrapper;
