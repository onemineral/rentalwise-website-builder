import { Placement } from '@floating-ui/react';
import React from 'react';
type Position = 'above' | 'below';

export interface DropdownProps {
    active?: boolean;
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    alignment?: Placement;
    position?: Position;
    onClose?: () => void;
    onOpen?: () => void;
    fullWidth?: boolean;
    height?: number;
    arrow?: boolean;
    light?: boolean;
    disabled?: boolean;
    closeOnClickContent?: boolean;
}
