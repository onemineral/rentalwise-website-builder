'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Tooltip from '@/components/Tooltip/Tooltip';
import classnames from 'classnames';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getWebsiteChannelImages } from '@/app/actions';

const ImageInput = ({
    label = 'Image',
    placeholder,
    value,
    onChange,
    hint,
    classes,
    disabled,
}: {
    label?: string;
    placeholder?: string;
    value?: number | string | undefined;
    onChange?: (value: number | string | undefined) => void;
    hint?: string;
    classes?: any;
    disabled?: boolean;
}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const onChangeHandler = (e: any) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        // getWebsiteChannelImages()
        //     .then((response: any) => {
        //         console.log(response);
        //     })
        //     .catch((error: any) => console.error(error));
    }, []);

    const baseInputClasses = classnames(
        'relative w-full bg-white text-slate-700 text-xs border border-slate-200 rounded-md px-2 py-1.5 transition duration-300 ease shadow-sm focus-visible:ring-0 focus-visible:outline-none',
        {
            'focus:outline-none focus:border-slate-400 focus:shadow hover:border-slate-400':
                !disabled,
            '!text-slate-400': !value && !!placeholder,
        },
        classes?.input,
    );

    const Content = useMemo(() => {
        return (
            <div
                className={classnames(
                    'relative flex w-full items-center cursor-pointer',
                    classes?.container,
                )}
            >
                {label && (
                    <label
                        className={classnames(
                            'text-xs flex items-center min-w-20 w-20 p-1',
                            classes?.label,
                        )}
                    >
                        {label}
                    </label>
                )}
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                    <DialogTrigger className={'w-full text-left'}>
                        <div
                            className={classnames(
                                baseInputClasses,
                                classes?.input,
                            )}
                        >
                            {value || placeholder}
                        </div>
                    </DialogTrigger>
                    <DialogContent className={'max-w-3xl'}>
                        <DialogHeader>Image gallery</DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => setModalOpen(false)}>
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }, [
        classes?.container,
        classes?.label,
        classes?.input,
        label,
        modalOpen,
        baseInputClasses,
        value,
        placeholder,
    ]);

    if (!hint) return <>{Content}</>;

    return (
        <Tooltip content={<span className={'text-sm'}>{hint}</span>}>
            {Content}
        </Tooltip>
    );
};

export default ImageInput;
