'use client';

import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { Root } from '@/components/User/Root';
import { Button } from '@/components/User/Button';
import { Text } from '@/components/User/Text';
import { Container } from '@/components/User/Container';
import { Editor, Element } from '@craftjs/core';
import Topbar from '@/components/Topbar/Topbar';
import FrameWrapper from '@/components/FrameWrapper';
import Tabs, { TabProps } from '@/components/Tabs/Tabs';
import Menu from '@/components/Menu/Menu';
import SettingsPanel from '@/components/SettingsPanel';
import StylePanel from '@/components/StylePanel';
import PageView from '@/components/PageView';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

export const EditorContext = createContext({ users: null, query: null });

const EditorWrapper = ({ data }: any) => {
    const [localNodes, setLocalNodes] = useState<any>(null);
    const [nodesToSave, setNodesToSave] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);

    useEffect(() => {
        if (window) {
            const item = window.localStorage.getItem(
                'rentalwise-website-builder',
            );

            if (item) {
                setLocalNodes(
                    window.localStorage.getItem('rentalwise-website-builder'),
                );
                setNodesToSave(
                    window.localStorage.getItem('rentalwise-website-builder'),
                );
            }
        }
    }, []);

    const onNodesChange = useCallback((value: any) => {
        setNodesToSave(value.serialize());
    }, []);

    const onSave = useCallback(async () => {
        setLoading(true);

        if (window) {
            window.localStorage.setItem(
                'rentalwise-website-builder',
                nodesToSave || '',
            );
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [nodesToSave]);

    const tabs: TabProps[] = useMemo(() => {
        return [
            {
                id: 'settings',
                label: 'Settings',
                content: <SettingsPanel />,
            },
            {
                id: 'style',
                label: 'Style',
                content: <StylePanel />,
            },
        ];
    }, []);

    return (
        <>
            <EditorContext.Provider value={data}>
                <Editor
                    resolver={{ Root, Button, Text, Container }}
                    onNodesChange={onNodesChange}
                    enabled={true}
                >
                    <div
                        className={
                            'w-screen h-dvh flex flex-col bg-white text-slate-900'
                        }
                    >
                        <Topbar
                            onSave={onSave}
                            onPreview={() => setPreviewOpen(true)}
                            loading={loading}
                        />
                        <div
                            className={'flex w-screen h-full'}
                            style={{ height: 'calc(100vh - 3.5rem)' }}
                        >
                            <Menu />
                            <div
                                className={
                                    'flex w-full max-w-full overflow-auto'
                                }
                            >
                                <FrameWrapper nodes={localNodes}>
                                    <Element
                                        is={Root}
                                        canvas
                                        custom={{ displayName: 'Root' }}
                                    />
                                </FrameWrapper>
                            </div>
                            <div
                                className={
                                    'flex flex-col w-80 border-l border-slate-300'
                                }
                            >
                                <Tabs tabs={tabs} />
                            </div>
                        </div>
                    </div>
                </Editor>
            </EditorContext.Provider>
            <Dialog
                open={previewOpen}
                onOpenChange={(value: boolean) => setPreviewOpen(value)}
            >
                <DialogContent className={'max-w-7xl max-h-dvh'}>
                    <DialogHeader>
                        <DialogTitle>Page preview</DialogTitle>
                        <DialogDescription>
                            <PageView nodes={localNodes} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditorWrapper;
