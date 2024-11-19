import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Editor from '@monaco-editor/react';

const HtmlEditorModal = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string | undefined) => void;
}) => {
    const [htmlModalOpen, setHtmlModalOpen] = useState(false);
    const [localValue, setLocalValue] = useState(value);

    return (
        <Dialog open={htmlModalOpen} onOpenChange={setHtmlModalOpen}>
            <DialogTrigger className={'w-full'}>
                <span
                    className={
                        'flex justify-center w-full text-xs border border-slate-400 rounded-md px-2 py-1.5'
                    }
                >
                    Edit html
                </span>
            </DialogTrigger>
            <DialogContent className={'max-w-7xl max-h-dvh'}>
                <DialogHeader>
                    <DialogTitle>Html Editor</DialogTitle>
                </DialogHeader>
                <div>
                    <Editor
                        height="80vh"
                        defaultLanguage="html"
                        defaultValue={localValue || '{* some comment *}'}
                        onChange={(value: any, event: any) => {
                            setLocalValue(value);
                        }}
                    />
                </div>
                <DialogFooter>
                    <Button
                        onClick={() => {
                            onChange?.(localValue);
                            setHtmlModalOpen(false);
                        }}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default HtmlEditorModal;
