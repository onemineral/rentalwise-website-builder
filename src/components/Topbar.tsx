import React from 'react';
import Loader, { LoaderSize } from '@/components/Loader';
import BaseButton from '@/components/BaseButton';

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
                'flex w-full p-4 bg-slate-100 justify-between items-center border-b border-slate-200'
            }
        >
            <h2>Topbar</h2>
            <div>
                <BaseButton onClick={onSave}>
                    Save
                    {loading && (
                        <span className="inline-block align-middle">
                            <Loader size={LoaderSize.Small} light={true} />
                        </span>
                    )}
                </BaseButton>
            </div>
        </div>
    );
};

export default Topbar;
