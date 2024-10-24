import React from 'react';
import { Placement } from '@floating-ui/react';

export interface TooltipProps {
    children?: React.ReactNode;
    content?: React.ReactNode;
    placement?: Placement;
    light?: boolean;
    classes?: any;
}

export interface RenderProps {
    ref: React.Ref<any>;
}

export interface TooltipOptions {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    arrowRef?: any;
    light?: boolean;
}
