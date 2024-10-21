import { ReactNode } from 'react';
import { Placement } from '@floating-ui/react';

export interface PopoverProps {}

export interface PopoverTriggerProps {
    children: ReactNode;
    asChild?: boolean;
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
