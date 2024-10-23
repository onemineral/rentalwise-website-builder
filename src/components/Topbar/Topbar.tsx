import React from 'react';
import Loader, { LoaderSize } from '@/components/Loader';
import BaseButton from '@/components/BaseButton';
import { Dropdown } from '@/components/Dropdown';
import { IoDocumentOutline } from 'react-icons/io5';

const Topbar = ({
    onSave,
    loading,
}: {
    onSave?: () => void;
    loading?: boolean;
}) => {
    return (
        <div
            className={
                'flex w-full py-1.5 px-4 bg-slate-50 items-center border-b border-slate-300'
            }
        >
            <h1 className={'text-lg'} style={{ width: '50px' }}>
                RW
            </h1>
            <div className={'flex w-full h-full items-center px-3'}>
                <Dropdown
                    trigger={
                        <div
                            className={
                                'flex items-center text-xs px-2 py-1 border border-slate-500 rounded hover:bg-slate-100'
                            }
                        >
                            <IoDocumentOutline className={'mr-1'} size={13} />
                            Home
                        </div>
                    }
                >
                    <div
                        className={
                            'flex flex-col divide-y divide-gray-200 text-xs min-w-32'
                        }
                    >
                        <span
                            className={'p-2 hover:bg-slate-100 cursor-pointer'}
                        >
                            Page 1
                        </span>
                        <span
                            className={'p-2 hover:bg-slate-100 cursor-pointer'}
                        >
                            Page 1
                        </span>
                        <span
                            className={'p-2 hover:bg-slate-100 cursor-pointer'}
                        >
                            Page 1
                        </span>
                    </div>
                </Dropdown>
            </div>
            <BaseButton
                onClick={onSave}
                className={'whitespace-nowrap flex items-center space-x-1'}
            >
                <span>Save</span>
                {loading && (
                    <span className="inline-block align-middle">
                        <Loader size={LoaderSize.Small} light={true} />
                    </span>
                )}
            </BaseButton>
        </div>
    );
};

export default Topbar;
