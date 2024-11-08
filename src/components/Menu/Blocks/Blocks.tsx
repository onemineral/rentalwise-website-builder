import React from 'react';
import BlockCard from '@/components/BlockCard';
import { Element, useEditor } from '@craftjs/core';
import { Container } from '@/components/User/Container';
import { PiFrameCornersLight } from 'react-icons/pi';
import { Text } from '@/components/User/Text';
import { IoTextOutline } from 'react-icons/io5';

const Blocks = ({ onDragEnd }: { onDragEnd?: (key: string) => void }) => {
    const { connectors } = useEditor();

    return (
        <div className={'grid grid-cols-2 gap-2 p-2'}>
            <BlockCard
                key={'container'}
                title={'Container'}
                ref={(ref: any) =>
                    connectors.create(ref, <Element is={Container} canvas />)
                }
                icon={<PiFrameCornersLight size={26} />}
                onDragEnd={() => onDragEnd?.('container')}
            />
            <BlockCard
                key={'text'}
                title={'Text'}
                ref={(ref: any) => connectors.create(ref, <Text text="Text" />)}
                icon={<IoTextOutline size={24} />}
                onDragEnd={() => onDragEnd?.('text')}
            />
        </div>
    );
};

export default Blocks;
