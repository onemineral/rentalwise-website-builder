import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Text } from '@/components/user/Text';
import { Container } from '@/components/user/Container';
import BaseButton from '@/components/BaseButton';
import { Button } from '@/components/user/Button';

const Toolbox = () => {
    const { connectors } = useEditor();

    return (
        <div className={'flex flex-col items-start bg-slate-50 h-full'}>
            <div className={'bg-slate-100 w-full p-2'}>
                <h1>Blocks</h1>
            </div>
            <div className={'p-2 grid grid-cols-2 gap-2 overflow-y-auto'}>
                <BaseButton
                    ref={(ref: any) =>
                        connectors.create(ref, <Text text="Text" />)
                    }
                >
                    Text
                </BaseButton>
                <BaseButton
                    ref={(ref: any) =>
                        connectors.create(
                            ref,
                            <Element is={Container} canvas />,
                        )
                    }
                >
                    Container
                </BaseButton>
                <BaseButton
                    ref={(ref: any) =>
                        connectors.create(ref, <Button>Button</Button>)
                    }
                >
                    Button
                </BaseButton>
            </div>
        </div>
    );
};

export default Toolbox;
