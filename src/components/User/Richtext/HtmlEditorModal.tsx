import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const HtmlEditorModal = () => {
    const [htmlModalOpen, setHtmlModalOpen] = useState(false);

    return (
        <Dialog open={htmlModalOpen} onOpenChange={setHtmlModalOpen}>
            <DialogTrigger className={'w-full'}>
                <Button className={'w-full text-xs'} variant={'outline'}>
                    Edit html
                </Button>
            </DialogTrigger>
            <DialogContent className={'max-w-7xl max-h-dvh'}>
                <div>Editor content</div>
                <DialogFooter>
                    <Button onClick={() => setHtmlModalOpen(false)}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default HtmlEditorModal;
