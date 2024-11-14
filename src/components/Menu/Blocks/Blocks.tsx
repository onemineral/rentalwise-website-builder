import React from 'react';
import BlockCard from '@/components/BlockCard';
import { Element, useEditor } from '@craftjs/core';
import { Container } from '@/components/User/Container';
import { PiFrameCornersLight } from 'react-icons/pi';
import { Paragraph } from '@/components/User/Paragraph';
import { IoTextOutline } from 'react-icons/io5';
import { Heading } from '@/components/User/Heading';
import { ButtonIcon, HeadingIcon, Link1Icon } from '@radix-ui/react-icons';
import { Link } from '@/components/User/Link';
import { Button } from '@/components/User/Button';

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
            <BlockCard
                title={'Link'}
                ref={(ref: any) => connectors.create(ref, <Link />)}
                icon={<Link1Icon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('link')}
            />
            <BlockCard
                title={'Button'}
                ref={(ref: any) => connectors.create(ref, <Button />)}
                icon={<ButtonIcon width={24} height={24} />}
                onDragEnd={() => onDragEnd?.('button')}
            />
        </div>
    );
};

export default Blocks;
