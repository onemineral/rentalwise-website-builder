import React from 'react';
import { Button } from '@/components/catalyst-ui-kit/button';
import Loader, { LoaderSize } from '@/components/Loader';

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
                <Button onClick={onSave}>
                    Save
                    {loading && (
                        <span className="inline-block align-middle">
                            <Loader size={LoaderSize.Small} light={true} />
                        </span>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Topbar;
