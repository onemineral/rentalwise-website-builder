import React from 'react';
import { Layers as CustomLayers } from '@craftjs/layers';

const Layers = () => {
    return (
        <div className={'flex flex-col items-start bg-slate-50 h-full'}>
            <div className={'bg-slate-100 w-full p-2'}>
                <h1>Layers</h1>
            </div>
            {/*<CustomLayers />*/}
        </div>
    );
};

export default Layers;
