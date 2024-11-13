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
import { Paragraph } from '@/components/User/Paragraph';
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
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import classnames from 'classnames';
import Frame from 'react-frame-component';
import IFrameWrapper from '@/components/IFrameWrapper';
import RenderNode from '@/components/RenderNode';
import { Heading } from '@/components/User/Heading';
import { Link } from '@/components/User/Link';

export const EditorContext = createContext({
    users: null,
    query: null,
});

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

const EditorWrapper = ({ data }: any) => {
    const [localNodes, setLocalNodes] = useState<any>(null);
    const [nodesToSave, setNodesToSave] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [device, setDevice] = useState<DeviceType>('desktop');

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        if (window) {
            setLocalNodes(
                window.localStorage.getItem('rentalwise-website-builder'),
            );
            setNodesToSave(
                window.localStorage.getItem('rentalwise-website-builder'),
            );
        }
        setMounted(true);
    }, []);

    const onNodesChange = useCallback(
        (value: any) => {
            if (
                JSON.stringify(nodesToSave) !==
                JSON.stringify(value.serialize())
            ) {
                setNodesToSave(value.serialize());
            }
        },
        [nodesToSave],
    );

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

    // const sendMessage = () => {
    //     if (parent) {
    //         parent.postMessage('Hi dashboard!', 'http://localhost:3000');
    //     }
    // };
    //
    // const ORIGIN_URL = 'http://localhost:3000';
    //
    // const onMessageReceived = (event: MessageEvent) => {
    //     if (
    //         event.origin !== ORIGIN_URL ||
    //         /^react-devtools/gi.test(event.data.source)
    //     ) {
    //         return;
    //     }
    //
    //     console.log('Message received from dashboard', event);
    // };
    //
    // useEffect(function () {
    //     window.addEventListener('message', onMessageReceived);
    //
    //     return function () {
    //         window.removeEventListener('message', onMessageReceived);
    //     };
    // });

    return (
        <>
            <EditorContext.Provider value={data}>
                <Editor
                    resolver={{
                        Root,
                        Button,
                        Paragraph,
                        Heading,
                        Link,
                        Container,
                    }}
                    onNodesChange={onNodesChange}
                    enabled={true}
                    indicator={{
                        className: 'bg-primary',
                    }}
                    onRender={RenderNode}
                >
                    <div
                        className={
                            'w-screen h-dvh flex flex-col bg-white text-slate-900'
                        }
                    >
                        <Topbar
                            onSave={onSave}
                            onPreview={() => setPreviewOpen(true)}
                            onChangeDevice={setDevice}
                            loading={loading}
                        />
                        <div
                            className={'flex w-screen h-full'}
                            style={{ height: 'calc(100vh - 3.5rem)' }}
                        >
                            <Menu />
                            <div className="bg-slate-100 w-full p-6">
                                <div
                                    className={classnames(
                                        '@container flex w-full h-full max-h-dvh max-w-full mx-auto',
                                        {
                                            '!w-[320px]': device === 'mobile',
                                            '!w-[768px]': device === 'tablet',
                                        },
                                    )}
                                >
                                    {isMounted && (
                                        <Frame
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            className={'bg-white'}
                                        >
                                            <IFrameWrapper>
                                                <FrameWrapper
                                                    nodes={localNodes}
                                                    key={`frame-${device}`}
                                                >
                                                    <Element
                                                        is={Root}
                                                        canvas
                                                        custom={{
                                                            displayName: 'Root',
                                                        }}
                                                    />
                                                </FrameWrapper>
                                            </IFrameWrapper>
                                        </Frame>
                                    )}
                                </div>
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

            {/*Preview modal*/}
            <Dialog
                open={previewOpen}
                onOpenChange={(value: boolean) => setPreviewOpen(value)}
            >
                <DialogContent className={'max-w-7xl max-h-dvh'}>
                    <DialogHeader>
                        <DialogTitle>Page preview</DialogTitle>
                    </DialogHeader>
                    <PageView nodes={localNodes} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditorWrapper;
