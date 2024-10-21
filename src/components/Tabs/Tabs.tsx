import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';

export type TabProps = {
    id: string;
    label: ReactNode;
    content?: ReactNode;
};

const Tabs = ({ tabs }: { tabs: TabProps[] }) => {
    const [activeTab, setActiveTab] = useState('style');

    return (
        <div className={'pt-0.5 px-1 bg-slate-100 select-none'}>
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
                                        activeTab === tab.id,
                                },
                            )}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className={'text-xs'}>{tab.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Tabs;
