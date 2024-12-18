import React from 'react';
import BlockCard from '@/components/BlockCard';
import { Element, useEditor } from '@craftjs/core';
import { Container } from '@/components/User/Container';
import { PiFrameCornersLight } from 'react-icons/pi';
import { Paragraph } from '@/components/User/Paragraph';
import { IoTextOutline } from 'react-icons/io5';
import { Heading } from '@/components/User/Heading';
import {
    ButtonIcon,
    HeadingIcon,
    Link1Icon,
    ReaderIcon,
} from '@radix-ui/react-icons';
import { Link } from '@/components/User/Link';
import { Button } from '@/components/User/Button';
import { RichText } from '@/components/User/Richtext/RichText';

const Blocks = ({
    onDragStart,
    onDragEnd,
}: {
    onDragStart?: (key: string) => void;
    onDragEnd?: (key: string) => void;
}) => {
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
                onDragStart={() => onDragStart?.('container')}
            />
            <BlockCard
                title={'Paragraph'}
                ref={(ref: any) => connectors.create(ref, <Paragraph />)}
                icon={<IoTextOutline size={24} />}
                onDragEnd={() => onDragEnd?.('paragraph')}
                onDragStart={() => onDragStart?.('paragraph')}
            />
            <BlockCard
                title={'Heading'}
                ref={(ref: any) => connectors.create(ref, <Heading />)}
                icon={<HeadingIcon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('heading')}
                onDragStart={() => onDragStart?.('heading')}
            />
            <BlockCard
                title={'Link'}
                ref={(ref: any) => connectors.create(ref, <Link />)}
                icon={<Link1Icon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('link')}
                onDragStart={() => onDragStart?.('link')}
            />
            <BlockCard
                title={'RichText'}
                ref={(ref: any) => connectors.create(ref, <RichText />)}
                icon={<ReaderIcon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('rich-text')}
                onDragStart={() => onDragStart?.('rich-text')}
            />
            <BlockCard
                title={'Button'}
                ref={(ref: any) => connectors.create(ref, <Button />)}
                icon={<ButtonIcon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('button')}
                onDragStart={() => onDragStart?.('button')}
            />
        </div>
    );
};

export default Blocks;
