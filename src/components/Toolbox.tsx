import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Text } from '@/components/user/Text';
import { Container } from '@/components/user/Container';
import { Button } from '@/components/user/Button';
import { Button as CatalystButton } from '@/components/catalyst-ui-kit/button';
import { Users } from '@/components/user/Users';
import { Loading } from '@/components/user/Loading';

const Toolbox = () => {
    const { connectors } = useEditor();

    return (
        <div className={'flex flex-col items-start bg-slate-50 h-full'}>
            <div className={'bg-slate-100 w-full p-2'}>
                <h1>Drag to add</h1>
            </div>
            <div className={'p-2 grid grid-cols-3 gap-2 overflow-y-auto'}>
                <CatalystButton
                    ref={(ref: any) =>
                        connectors.create(ref, <Text text="Text" />)
                    }
                >
                    Text
                </CatalystButton>
                <CatalystButton
                    ref={(ref: any) =>
                        connectors.create(
                            ref,
                            <Element is={Container} canvas />,
                        )
                    }
                >
                    Container
                </CatalystButton>
                <CatalystButton
                    ref={(ref: any) =>
                        connectors.create(ref, <Button>Button</Button>)
                    }
                >
                    Button
                </CatalystButton>
                <CatalystButton
                    ref={(ref: any) => connectors.create(ref, <Users />)}
                >
                    Users
                </CatalystButton>

                <CatalystButton
                    ref={(ref: any) => connectors.create(ref, <Loading />)}
                >
                    Loading
                </CatalystButton>
            </div>
        </div>
    );
};

export default Toolbox;
