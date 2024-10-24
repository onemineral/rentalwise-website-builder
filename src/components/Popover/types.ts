import { ReactNode } from 'react';
import { Placement } from '@floating-ui/react';

export interface PopoverTriggerProps {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export interface PopoverOptions {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    withOverlay?: boolean;
    closeOnClickContent?: boolean;
}
