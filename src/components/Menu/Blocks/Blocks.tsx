import React from 'react';
import BlockCard from '@/components/BlockCard';
import { Element, useEditor } from '@craftjs/core';
import { Container } from '@/components/User/Container';
import { PiFrameCornersLight } from 'react-icons/pi';
import { Paragraph } from '@/components/User/Paragraph';
import { IoTextOutline } from 'react-icons/io5';
import { Heading } from '@/components/User/Heading';
import { HeadingIcon } from '@radix-ui/react-icons';

const Blocks = ({ onDragEnd }: { onDragEnd?: (key: string) => void }) => {
    const { connectors } = useEditor();

    return (
        <div className={'grid grid-cols-2 gap-2 p-2'}>
            <BlockCard
                title={'Container'}
                ref={(ref: any) =>
                    connectors.create(ref, <Element is={Container} canvas />)
                }
                icon={<PiFrameCornersLight size={26} />}
                onDragEnd={() => onDragEnd?.('container')}
            />
            <BlockCard
                title={'Paragraph'}
                ref={(ref: any) => connectors.create(ref, <Paragraph />)}
                icon={<IoTextOutline size={24} />}
                onDragEnd={() => onDragEnd?.('paragraph')}
            />
            <BlockCard
                title={'Heading'}
                ref={(ref: any) => connectors.create(ref, <Heading />)}
                icon={<HeadingIcon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('heading')}
            />
        </div>
    );
};

export default Blocks;
