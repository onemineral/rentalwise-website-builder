import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';

export type TabProps = {
    id: string;
    label: ReactNode;
    content?: ReactNode;
};

const Tabs = ({ tabs }: { tabs: TabProps[] }) => {
    const [activeTabId, setActiveTabId] = useState(tabs[1].id);
    const activeTab = tabs.find((tab: TabProps) => tab.id === activeTabId);

    return (
        <>
            <div
                className={
                    'flex flex-col h-full pt-0.5 px-1 bg-slate-50 select-none'
                }
            >
                <div
                    className={
                        'flex flex-row overflow-x-scroll border-b border-slate-300'
                    }
                >
                    {tabs.map((tab: TabProps, index: number) => {
                        return (
                            <div
                                key={index}
                                className={classnames(
                                    'px-4 py-1.5 flex whitespace-nowrap cursor-pointer border-b-2 border-transparent',
                                    {
                                        'bg-slate-200 border-b-2 border-slate-400 rounded-t-md':
                                            activeTabId === tab.id,
                                    },
                                )}
                                onClick={() => setActiveTabId(tab.id)}
                            >
                                <span className={'text-xs'}>{tab.label}</span>
                            </div>
                        );
                    })}
                </div>
                {activeTab?.content}
            </div>
        </>
    );
};

export default Tabs;
