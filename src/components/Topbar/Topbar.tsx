import React, { useContext } from 'react';
import Loader, { LoaderSize } from '@/components/Loader';
import BaseButton from '@/components/BaseButton';
import { Dropdown } from '@/components/Dropdown';
import { IoDocumentOutline } from 'react-icons/io5';
import ActionList from '@/components/ActionList/ActionList';
import { Button } from '@/components/ui/button';
import { DeviceType, EditorContext } from '@/components/EditorWrapper';
import { DesktopIcon, MobileIcon } from '@radix-ui/react-icons';
import Tooltip from '@/components/Tooltip/Tooltip';
import { useEditorStore } from '@/hooks/useEditorStore';

const Topbar = ({
    onSave,
    onPreview,
    loading,
    onChangeDevice,
}: {
    onSave?: () => void;
    onPreview?: () => void;
    onChangeDevice?: (device: DeviceType) => void;
    loading?: boolean;
}) => {
    const pages = useEditorStore((state: any) => state.pages);
    const currentPage =
        useEditorStore((state: any) => state.currentPage) || pages?.[0];
    const changePage = useEditorStore((state: any) => state.changePage);
    const languages = useEditorStore((state: any) => state.languages);
    const currentLanguage =
        useEditorStore((state: any) => state.currentLanguage) || languages?.[0];
    const changeLanguage = useEditorStore((state: any) => state.changeLanguage);

    return (
        <div
            className={
                'flex w-full px-4 bg-slate-50 items-center border-b border-slate-300 h-14 min-h-14'
            }
        >
            <h1 className={'text-lg'} style={{ width: '50px' }}>
                RW
            </h1>

            <div className={'flex w-full h-full items-center px-3'}>
                {pages?.length > 0 && (
                    <Dropdown
                        trigger={
                            <div
                                className={
                                    'flex items-center text-xs px-2 py-1 border border-slate-500 rounded hover:bg-slate-100'
                                }
                            >
                                <IoDocumentOutline
                                    className={'mr-1'}
                                    size={13}
                                />
                                {currentPage.title}
                            </div>
                        }
                    >
                        <ActionList>
                            {(pages || []).map((item: any, index: number) => (
                                <ActionList.Item
                                    key={index}
                                    onClick={() => changePage(item)}
                                    active={item.slug === currentPage.slug}
                                >
                                    {item.title}
                                </ActionList.Item>
                            ))}
                        </ActionList>
                    </Dropdown>
                )}

                {languages?.length > 0 && (
                    <Dropdown
                        trigger={
                            <div
                                className={
                                    'flex items-center text-xs ml-2 px-2 py-1 border border-slate-500 rounded hover:bg-slate-100'
                                }
                            >
                                {currentLanguage.title}
                            </div>
                        }
                    >
                        <ActionList>
                            {(languages || []).map(
                                (item: any, index: number) => (
                                    <ActionList.Item
                                        key={index}
                                        onClick={() => changeLanguage(item)}
                                        active={
                                            item.code === currentLanguage.code
                                        }
                                    >
                                        {item.title}
                                    </ActionList.Item>
                                ),
                            )}
                        </ActionList>
                    </Dropdown>
                )}

                <div className={'flex items-center justify-center w-full'}>
                    <Tooltip
                        content={'Desktop'}
                        classes={{ trigger: '!w-auto' }}
                    >
                        <div
                            className={
                                'hover:bg-slate-200 hover:border border-transparent rounded-md p-2 cursor-pointer size-10 items-center justify-center flex'
                            }
                            onClick={() => onChangeDevice?.('desktop')}
                        >
                            <DesktopIcon width={20} height={20} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={'Tablet'}
                        classes={{ trigger: '!w-auto' }}
                    >
                        <div
                            className={
                                'hover:bg-slate-200 hover:border border-transparent rounded-md p-2 cursor-pointer size-10 items-center justify-center flex'
                            }
                            onClick={() => onChangeDevice?.('tablet')}
                        >
                            <MobileIcon width={20} height={20} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={'Mobile'}
                        classes={{ trigger: '!w-auto' }}
                    >
                        <div
                            className={
                                'hover:bg-slate-200 hover:border border-transparent rounded-md p-2 cursor-pointer size-10 items-center justify-center flex'
                            }
                            onClick={() => onChangeDevice?.('mobile')}
                        >
                            <MobileIcon width={16} height={16} />
                        </div>
                    </Tooltip>
                </div>
            </div>

            <BaseButton
                onClick={onSave}
                className={'whitespace-nowrap flex items-center space-x-1 mr-1'}
            >
                <span>Save</span>
                {loading && (
                    <span className="inline-block align-middle">
                        <Loader size={LoaderSize.Small} light={true} />
                    </span>
                )}
            </BaseButton>
            <Button variant={'outline'} size={'sm'} onClick={onPreview}>
                Preview
            </Button>
        </div>
    );
};

export default Topbar;
